import React,{useState} from "react";
import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate, NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../firebase";

import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
  } from "firebase/storage";
  import { addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import AdminNav from "../../component/AdminComponents/AdminNav";
export default function EventsCreation() {
  
  const auth = getAuth();
  const navigate = useNavigate();
 
  const [formData, setFormData] = useState({
    eventName:"",
    eventDescription:"",
    images: {},
  });
  const {
    eventName,
    eventDescription,
    images,
  } = formData;
  function onChange(e) {
    let boolean = null;
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }));
    }
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
    
  }
  async function onSubmit(e) {
    e.preventDefault();
    async function storeImage(image) {
        return new Promise((resolve, reject) => {
          const storage = getStorage();
          const filename = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
          const storageRef = ref(storage, filename);
          const uploadTask = uploadBytesResumable(storageRef, image);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              toast.info("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  toast.info("Upload is paused");
                  break;
                case "running":
                  toast.info("Upload is running");
                  break;
                default:
                  break;  
              }
            },
            (error) => {
              // Handle unsuccessful uploads
              reject(error);
            },
            () => {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                resolve(downloadURL);
              });
            }
          );
        });
      }
      const imgUrls = await Promise.all(
        [...images].map((image) => storeImage(image))
      ).catch((error) => {
        
        toast.error("Images not uploaded");
        return;
      });
      
      const formDataCopy = {
        ...formData,
        imgUrls,
        timestamp: serverTimestamp(),
      };
      delete formDataCopy.images;
      
      const docRef = await addDoc(collection(db, "events"), formDataCopy);
      toast.success("Added New Events");
      navigate("/admin/events/create")

}
  return (
    <section className="w-screen h-full md:min-h-screen">
      {/* <div className="pt-32">Admin</div> 
     <p
                  onClick={onLogout}
                  className="text-blue-600 text-xs xs:text-sm hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer"
                >
                  Sign Out!
                </p>      */}
      <div className="flex items-center justify-center gap-2 w-full h-full">
        <div className="flex items-center justify-center gap-2 w-full h-full">
          <div className="flex items-start justify-center w-full  md:flex-row flex-col h-full">
            <AdminNav/>
            <div className="flex items-center justify-start  p-4 h-full flex-col w-full md:w-[80%]">
              <div className="flex items-center justify-center mt-4 gap-2 p-4">
                <h1 className="font-bold text-center flex items-center justify-center text-gray-800">
                  ADD NEW EVENT HERE
                </h1>
              </div>
              <div className="flex items-center justify-center gap-2 p-4">
                <form onSubmit={onSubmit} className="flex flex-col justify-center gap-4 p-2">
                  <label htmlFor="title">Enter Event Name</label>
                  <input
                    type="text"
                    name="eventName"
                    onChange={onChange}
                    className="bg-white border p-3 text-gray-800"
                    id="eventName"
                    value={eventName}
                    placeholder="Enter EventName"
                    required
                  />
                  <label htmlFor="title">Enter Event Description</label>
                  <input
                    type="text"
                    name="eventDescription"
                    onChange={onChange}
                    className="bg-white border p-3 text-gray-800"
                    id="eventDescription"
                    value={eventDescription}
                    placeholder="Enter EventDescription"
                    required
                  />
                  <label htmlFor="images">Event Poster</label>
                  <input
                    type="file"
                    name="images"
                    onChange={onChange}
                    className="bg-white border p-3"
                    id="images"
                    accept=".jpg,.png,.jpeg"
                    multiple={false}
                    required
                  />
                  <button
                    type="submit"
                    className="p-3 bg-green-600 text-white text-sm"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

