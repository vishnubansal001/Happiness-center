import React, { useState } from "react";
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
export default function Notice() {
  const auth = getAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    noticeName: "",
    noticeLink: "",
  });
  const { noticeName, noticeLink } = formData;
  function onChange(e) {
    let boolean = null;
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  }
  async function onSubmit(e) {
    e.preventDefault();

    const formDataCopy = {
      ...formData,
      timestamp: serverTimestamp(),
    };
    delete formDataCopy.images;

    const docRef = await addDoc(collection(db, "notice"), formDataCopy);
    toast.success("Added New Notice Successfully!");
    navigate("/admin/notice");
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
            <AdminNav />
            <div className="flex items-center justify-start  p-4 h-full flex-col w-full md:w-[80%]">
              <div className="flex items-center justify-center mt-4 gap-2 p-4">
                <h1 className="font-bold text-center flex items-center justify-center text-gray-800">
                  ADD NEW NOTICE HERE
                </h1>
              </div>
              <div className="flex items-center justify-center gap-2 p-4">
                <form
                  onSubmit={onSubmit}
                  className="flex flex-col justify-center gap-4 p-2"
                >
                  <label htmlFor="title">Enter Notice Name</label>
                  <input
                    type="text"
                    name="noticeName"
                    onChange={onChange}
                    className="bg-white border p-3 text-gray-800"
                    id="noticeName"
                    value={noticeName}
                    placeholder="Enter Notice Name"
                    required
                  />
                  <label htmlFor="title">Enter Notice Link</label>
                  <input
                    type="text"
                    name="noticeLink"
                    onChange={onChange}
                    className="bg-white border p-3 text-gray-800"
                    id="noticeLink"
                    value={noticeLink}
                    placeholder="Enter Notice Link"
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
