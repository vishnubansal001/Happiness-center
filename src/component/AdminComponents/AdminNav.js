import { getAuth } from "firebase/auth";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function AdminNav() {
  const auth = getAuth();
  const navigate = useNavigate();
  function onLogout() {
    auth.signOut();
    navigate("/");
  }
  return (
    <div className="flex items-start justify-start gap-2 p-4 min-h-screen h-full flex-col w-full md:w-[20%] border-b-2 md:border-r-2">
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
        <div className="flex flex-col items-start justify-center gap-8">
          <div className="flex flex-row md:flex-col items-start justify-center gap-8 font-semibold text-grey-600">
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
  );
}
