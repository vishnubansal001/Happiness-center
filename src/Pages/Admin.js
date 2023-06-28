import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import spinner from "../assets/spinner.svg";
import { db } from "../firebase";

export default function Admin() {
  const auth = getAuth();
  React.useEffect(() => {
    async function getEventName() {
      try {
        const docRef = collection(db, "mukul");
        const docSnap = await getDocs(docRef);
        docSnap.forEach((doc) => {});
      } catch (error) {
        console.log(error);
      }
    }
    getEventName();
  }, []);
  const navigate = useNavigate();
  function onLogout() {
    auth.signOut();
    navigate("/");
  }
  return (
    <section className="w-screen h-screen">
      {/* <div className="pt-32">Admin</div> 
     <p
                  onClick={onLogout}
                  className="text-blue-600 text-xs xs:text-sm hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer"
                >
                  Sign Out!
                </p>      */}
      <div className="flex items-center justify-center gap-2 w-full h-full min-h-screen">
        <div className="flex items-center justify-center gap-2 w-full py-4 ">
          <div className="flex items-center justify-center w-full py-6">
            <div className="flex items-start justify-start gap-2 p-4 h-full flex-col w-[20%] border-r-2">
              <div className="flex items-center justify-start py-8">
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
              <div className="flex items-start justify-center flex-col">
                <div className="flex flex-col items-start justify-center gap-8">
                  <div className="flex flex-col items-start justify-center gap-8 font-semibold text-grey-600">
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
                        <p className="text-sm">Event Listing</p>
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
                        <p className="text-sm">Events Creation</p>
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
            <div className="flex items-center justify-center gap-2 p-4 h-full flex-col w-[80%]">
              <div className="flex items-center justify-center gap-2 p-4 h-full flex-col w-full">
                <div className="flex items-center justify-center flex-col gap-2">
                  <p className="flex items-center justify-center text-center font-bold text-3xl text-gray-800">
                    Welcome to Happiness Center Chitkara University
                  </p>
                  <p className="flex items-center justify-center text-center font-medium text-3xl w-[80%] text-gray-600">
                    This the admin page for the happiness center website. Please
                    use wisely and always refresh first before adding any new
                    event, archive photo, winners or any other listing.
                  </p>
                  <img src={spinner} alt="logo" className="w-24 h-24" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
