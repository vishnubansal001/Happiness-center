import React,{useState,useEffect} from "react";
import { getAuth } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useNavigate, NavLink } from "react-router-dom";

import { db } from "../../firebase";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import AdminNav from "../../component/AdminComponents/AdminNav";
export default function Listing() {
  
  const auth = getAuth();
  const navigate = useNavigate();
 
  const [events, setEvents] = useState(null);
  useEffect(()=>{
    
    async function fetchListings(){
      try{
        const eventRef = collection(db, "events");
        const querySnap = await getDocs(eventRef);
        const events = [];
        querySnap.forEach((doc) => {
          return events.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setEvents(events);
       
      }catch(error){
          toast.error(error)
      }
    }
    if(events===null){
    fetchListings()}
    
},[events])
async function onDelete(eventID){
  if(window.confirm('Are you sure you want to delete?')){
    await deleteDoc(doc(db, "events", eventID));
    const updatedEvents = events.filter(
      (event) => event.id !== eventID
    );
    setEvents(updatedEvents)
    toast.success("Successfully deleted the listing");
  }
}
function onEdit(eventID){
  navigate(`/edit-listing/${eventID}`)
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
          <div className="flex items-start justify-center w-full  h-full md:flex-row flex-col">
           <AdminNav/>
            <div className="flex items-center justify-start  p-4 h-full flex-col w-full md:w-[80%]">
              <div className="bg-white shadow-sm flex items-center justify-center p-2"><h1 className="flex items-center justify-center gap-2 text-black font-bold text-xl">EVENTS LIST</h1></div>
               <div className="grid grid-cols-1 sm:grid-cols-2 my-3 items-center justify-center w-full gap-4 bg-white">
               { events && events?.length > 0 ?   (events?.map((event) => (
                    
                    <div key={event.id} className="flex items-center w-full justify-center">
                       <div className="flex items-center justify-center gap-2 p-2 border lg:w-[75%] rounded-lg flex-col">
                        <div className="flex items-center justify-center"> <img src={event.data.imgUrls[0]} className="w-[15rem] h-[15rem]" alt={event.data.eventName}/></div>
                         <div className="flex items-center justify-center"> <h1 className="font-semibold font-base uppercase">{event.data.eventName}</h1></div>
                         <div className="flex items-center justify-center">  <p className="font-medium font-base uppercase">{event.data.eventDate}</p></div>
                       <div className="flex items-center justify-between gap-2 flex-row lg:w-[85%]"><div className="flex items-center justify-center gap-3 flex-row">
                        <div className="flex items-center justify-center p-2">
                         <Moment className="bg-[#3377cc] text-white uppercase text-[.75rem] font-semibold rounded-md p-2 shadow-md" fromNow>{event.data.timestamp?.toDate()}</Moment>
                          </div>
                          <div className="flex items-center justify-center"> {onDelete && (
        <FaTrash className="h-[1rem] cursor-pointer text-red-500" onClick={()=>onDelete(event.id)} />
      )}</div>
                          <div className="flex items-center justify-center"> {onEdit && (
        <MdEdit className="h-[1rem] cursor-pointer text-green-500" onClick={()=>onEdit(event.id)} />
      )}</div>
                          </div>
                          <Link key={event.id} to={`/admin/events/listing/${event.id}/happiness2023`}>
                         <button type="submit"
									        className="flex items-center w-full whitespace-nowrap justify-center p-2  font-medium text-center text-white border border-gray-200 rounded-[4px] hover:bg-gray-100 bg-[#08bd80] hover:bg-transparent hover:text-[#08bd80] text-[.75rem] drop-shadow-md">
										SHOW LISTINGS
									</button>
                          </Link>
                          </div>
                          </div>
                    </div>
                   
                  ))): <div className="flex items-center justify-center">  <p className="font-medium font-base uppercase">NO EVENT ADD NOW</p></div>}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


