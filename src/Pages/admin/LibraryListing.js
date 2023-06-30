import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import exportFromJSON from "export-from-json";
import { db } from "../../firebase";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
export default function RegListing() {
  const params = useParams();
  const auth = getAuth();
  const navigate = useNavigate();
  const [lastFetchListing, setLastFetchListing] = useState(null);

  function onLogout() {
    auth.signOut();
    navigate("/");
  }
  const [registrations, setRegistrations] = useState(null);
  const [downloads, setDownloads] = useState(null);

  useEffect(() => {
    async function fetchListings() {
      try {
        const registrationsRef = collection(db, "library");
        const q = query(
          registrationsRef,
          orderBy("timestamp", "desc"),
          limit(20)
        );
        const querySnap = await getDocs(q);
        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchListing(lastVisible);
        const registrations = [];
        querySnap.forEach((doc) => {
          return registrations.push({
            id: doc?.id,
            data: doc?.data(),
          });
        });
        setRegistrations(registrations);
      } catch (error) {
        toast.error(error);
      }
    }
    if (registrations === null) {
      fetchListings();
    }
  }, []);

  async function onDelete(registrationID) {
    if (window.confirm("Are you sure you want to delete?")) {
      await deleteDoc(doc(db, `${params.eventID}`, registrationID));
      const updatedEvents = registrations.filter(
        (registration) => registration?.id !== registrationID
      );
      setRegistrations(updatedEvents);
      toast.success("Successfully deleted the listing");
    }
  }

  async function onFetchMoreListing() {
    try {
      const registrationsRef = collection(db, "library");
      const q = query(
        registrationsRef,
        orderBy("timestamp", "desc"),
        startAfter(lastFetchListing),
        limit(20)
      );
      const querySnap = await getDocs(q);
      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchListing(lastVisible);
      const registrations = [];
      querySnap.forEach((doc) => {
        return registrations.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setRegistrations((prevState) => [...prevState, ...registrations]);
    } catch (error) {
      toast.error("Could not fetch listing");
    }
  }

  async function downloadText() {
    try {
      const downloadRef = collection(db, "library");
      const q = query(downloadRef, orderBy("timestamp", "desc"));
      const querySnap = await getDocs(q);
      const downloads = [];
      querySnap.forEach((doc) => {
        return downloads.push(doc.data());
      });
      downloads.forEach((doc) => {
        doc.timestamp = doc.timestamp.toDate();
      });
      setDownloads(downloads);
      const fileName = "library";
      exportFromJSON({ data: downloads, fileName, exportType: "xls" });
    } catch (error) {
      toast.error(error);
    }
  }
  return (
    <section className="w-screen h-full">
      {/* <div className="pt-32">Admin</div> 
     <p
                  onClick={onLogout}
                  className="text-blue-600 text-xs xs:text-sm hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer"
                >
                  Sign Out!
                </p>      */}
      <div className="flex items-center justify-center gap-2 w-full h-full">
        <div className="flex items-center justify-center gap-2 w-full h-full md:py-4">
          <div className="flex items-center justify-center w-full md:py-6 h-full  flex-col">
            <div className="flex items-start justify-start gap-2 p-4 h-full flex-col w-full border-b-2 md:border-r-2">
              <div className="flex items-center justify-start py-4 md:py-8">
                <h1 className="flex item-start justify-center cursor-pointer text-black text-base font-semibold whitespace-nowrap">
                  <NavLink
                    to="/admin"
                    style={({ isActive }) => ({
                      color: isActive ? "green" : "black",

                      transition: "all 0.5s ease-in-out",
                    })}
                  >
                    {" "}
                    ADMIN PANEL
                  </NavLink>
                </h1>
              </div>
              <div className="flex items-start justify-center">
                <div className="flex flex-row items-center justify-center gap-8">
                  <div className="flex flex-row items-center justify-center gap-8 font-semibold text-grey-600">
                    <NavLink
                      to="/admin/events/listing"
                      style={({ isActive }) => ({
                        color: isActive ? "green" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                        transition: "all 0.5s ease-in-out",
                      })}
                    >
                      {" "}
                      <div className="flex item-center justify-center cursor-pointer font-semibold">
                        <p className="text-xs md:text-sm">Event Listing</p>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/admin/events/create"
                      style={({ isActive }) => ({
                        color: isActive ? "green" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                        transition: "all 0.5s ease-in-out",
                      })}
                    >
                      <div className="flex item-center justify-center flex-row cursor-pointer gap-2 font-semibold">
                        <p className="text-xs md:text-sm">Events Creation</p>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/admin/events/past"
                      style={({ isActive }) => ({
                        color: isActive ? "green" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                        transition: "all 0.5s ease-in-out",
                      })}
                    >
                      {" "}
                      <div className="flex item-center justify-center flex-row cursor-pointer gap-2 font-semibold ">
                        <p className="text-sm">Past Events</p>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/admin/events/archive"
                      style={({ isActive }) => ({
                        color: isActive ? "green" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                        transition: "all 0.5s ease-in-out",
                      })}
                    >
                      <div className="flex item-center justify-center flex-row cursor-pointer gap-2 font-semibold">
                        <p className="text-sm">Archive Addition</p>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/admin/speaker-listing"
                      style={({ isActive }) => ({
                        color: isActive ? "green" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                        transition: "all 0.5s ease-in-out",
                      })}
                    >
                      <div className="flex item-center justify-center flex-row cursor-pointer gap-2 font-semibold">
                        <p className="text-sm">SpeakerSession Listing</p>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/admin/counseling-listing"
                      style={({ isActive }) => ({
                        color: isActive ? "green" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                        transition: "all 0.5s ease-in-out",
                      })}
                    >
                      <div className="flex item-center justify-center flex-row cursor-pointer gap-2 font-semibold">
                        <p className="text-sm">Counseling Listing</p>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/admin/meditation-listing"
                      style={({ isActive }) => ({
                        color: isActive ? "green" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                        transition: "all 0.5s ease-in-out",
                      })}
                    >
                      <div className="flex item-center justify-center flex-row cursor-pointer gap-2 font-semibold">
                        <p className="text-sm">Meditation Listing</p>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/admin/library-listing"
                      style={({ isActive }) => ({
                        color: isActive ? "green" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                        transition: "all 0.5s ease-in-out",
                      })}
                    >
                      <div className="flex item-center justify-center flex-row cursor-pointer gap-2 font-semibold">
                        <p className="text-sm">Library Listing</p>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/admin/notice"
                      style={({ isActive }) => ({
                        color: isActive ? "green" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                        transition: "all 0.5s ease-in-out",
                      })}
                    >
                      <div className="flex item-center justify-center flex-row cursor-pointer gap-2 font-semibold">
                        <p className="text-sm">Notice Creation</p>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/admin/rewards"
                      style={({ isActive }) => ({
                        color: isActive ? "green" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                        transition: "all 0.5s ease-in-out",
                      })}
                    >
                      <div className="flex item-center justify-center flex-row cursor-pointer gap-2 font-semibold">
                        <p className="text-sm">Rewards Creation</p>
                      </div>
                    </NavLink>
                  </div>
                  <button
                    onClick={onLogout}
                    className="text-xs xs:text-sm hover:text-red-400 text-white bg-red-500 p-2 rounded-sm hover:bg-transparent hover:border hover:border-red-700 transition duration-200 ease-in-out cursor-pointer"
                  >
                    Sign Out!
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start h-full flex-col w-full">
              <div className="bg-white shadow-sm flex items-center w-full justify-between p-4">
                <h1 className="flex items-center justify-center gap-2 text-black font-bold text-xl">
                  LIBRARY STUDENT LIST
                </h1>
                <button
                  onClick={downloadText}
                  className="bg-[#08bd80] p-3 text-gray-100 border border-gray-300 hover:border-slate-600 rounded transition duration-150 ease-in-out text-xs"
                >
                  Download(Excel)
                </button>
              </div>
              <table className="flex-col flex items-center justify-center w-full bg-white">
                {registrations && registrations?.length > 0 ? (
                  registrations?.map((registration, index) => (
                    <tbody
                      key={index}
                      className="flex items-center justify-center w-full"
                    >
                      <tr className="flex items-center justify-around mx-auto  gap-2 w-full p-1 border flex-row">
                        <td className="flex w-10 p-1 ml-2">
                          {" "}
                          <p className="font-normal font-base text-sm text-start">
                            {index + 1}
                          </p>
                        </td>
                        <td className="flex w-full">
                          {" "}
                          <p className="font-normal font-base text-start text-sm">
                            {registration.data?.name}
                          </p>
                        </td>
                        <td className="flex w-full">
                          {" "}
                          <p className="font-normal font-base text-start text-sm">
                            {registration.data?.email}
                          </p>
                        </td>
                        <td className="flex w-full">
                          {" "}
                          <p className="font-normal font-base  text-start text-sm">
                            {registration.data?.contact}
                          </p>
                        </td>
                        <td className="flex w-full">
                          {" "}
                          <p className="font-normal font-base  text-start text-sm">
                            {registration.data?.rollno}
                          </p>
                        </td>
                        <td className="flex w-full">
                          {" "}
                          <p className="font-normal font-base  text-start text-sm">
                            {registration.data?.date}
                          </p>
                        </td>
                        <td className="flex w-full">
                          {" "}
                          <p className="font-normal font-base  text-start text-sm">
                            {registration.data?.book}
                          </p>
                        </td>
                        <td className="flex w-full">
                          {" "}
                          <p className="font-normal font-base  text-start text-sm">
                            {registration.data?.time}
                          </p>
                        </td>
                        <td className="flex w-full justify-end">
                          {" "}
                          {onDelete && (
                            <FaTrash
                              className="h-[1rem] cursor-pointer text-red-500"
                              onClick={() => onDelete(registration.id)}
                            />
                          )}
                        </td>
                      </tr>
                    </tbody>
                  ))
                ) : (
                  <tbody>
                    <tr className="flex items-center justify-center">
                      <td className="font-medium font-base uppercase">
                        No registrations
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
              {registrations && lastFetchListing && (
                <div className="flex justify-center w-full items-center flex-row mt-3 mb-3">
                  <button
                    onClick={onFetchMoreListing}
                    className="bg-[#08bd80] p-3 text-gray-100 border border-gray-300 hover:border-slate-600 rounded transition duration-150 ease-in-out text-xs"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
