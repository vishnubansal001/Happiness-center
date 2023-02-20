import React from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import burger from "../assets/menu.png";
import vector from '../assets/Vector.svg';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
//   const lgNav = (
//     <div className="w-screen h-full flex items-center justify-around flex-row ">
//       <div className="flex items-center justify-center flex-row mr-10">
//         <img src={logo} alt="happiness center logo" />
//       </div>
//       <div className="flex flex-row items-center justify-center p-1">
//         <div className="flex flex-row items-center justify-center gap-12 font-monts p-1">
//           <NavLink
//             to="/"
//             style={({ isActive }) => ({
//               color: isActive ? "red" : "black",
//               fontWeight: isActive ? "bold" : "normal",
//               transition: "all 0.5s ease-in-out",
//             })}
//           >
//             <div className="flex item-center justify-center cursor-pointer">
//               Home
//             </div>
//           </NavLink>
//           <NavLink
//             to="/about"
//             style={({ isActive }) => ({
//               color: isActive ? "red" : "black",
//               fontWeight: isActive ? "bold" : "normal",
//               transition: "all 0.5s ease-in-out",
//             })}
//           >
//             {" "}
//             <div className="flex item-center justify-center cursor-pointer">
//               About
//             </div>
//           </NavLink>
//           <NavLink
//             to="/counseling"
//             style={({ isActive }) => ({
//               color: isActive ? "red" : "black",
//               fontWeight: isActive ? "bold" : "normal",
//               transition: "all 0.5s ease-in-out",
//             })}
//           >
//             <div className="flex item-center justify-center cursor-pointer">
//               Counseling
//             </div>
//           </NavLink>
//           <NavLink
//             to="/events"
//             style={({ isActive }) => ({
//               color: isActive ? "red" : "black",
//               fontWeight: isActive ? "bold" : "normal",
//               transition: "all 0.5s ease-in-out",
//             })}
//           >
//             {" "}
//             <div className="flex item-center justify-center cursor-pointer">
//               Events
//             </div>
//           </NavLink>
//           <NavLink
//             to="/team"
//             style={({ isActive }) => ({
//               color: isActive ? "red" : "black",
//               fontWeight: isActive ? "bold" : "normal",
//               transition: "all 0.5s ease-in-out",
//             })}
//           >
//             <div className="flex item-center justify-center cursor-pointer">
//               Our Team
//             </div>
//           </NavLink>
//           <NavLink
//             to="/archive"
//             style={({ isActive }) => ({
//               color: isActive ? "red" : "black",
//               fontWeight: isActive ? "bold" : "normal",
//               transition: "all 0.5s ease-in-out",
//             })}
//           >
//             <div className="flex item-center justify-center cursor-pointer">
//               Archive
//             </div>
//           </NavLink>
//         </div>
//       </div>
//       <div className="flex flex-row items-center justify-center gap-6 font-monts p-1">
//         <div className="flex items-center absolute justify-center bg-[#FB393F] w-[8rem] h-[2.5rem] p-2 ">
//           <p className="text-sm">Register Now</p>
//         </div>
//         <div className="flex ml-[8px] mt-[10px] items-center justify-center bg-[#000000] w-[8rem] h-[2.5rem] "></div>
//       </div>
//     </div>
//   );
//   const mdNav = (
//     <div className="w-screen h-full flex items-center justify-between flex-row ">
//       <div className="flex items-center justify-center flex-row ml-0 sm:ml-6 md:ml-8">
//         <img
//           src={logo}
//           alt="happiness center logo"
//           class="md:h-[100%] md:w-[100%] sm:w-[80%] sm:h-[80%] h-[75%] w-[75%]"
//         />
//       </div>
//       <div className="flex items-center justify-center mr-4 sm:mr-6 md:mr-8">
//         <img
//           src={burger}
//           alt="burger menu"
//           class="sm:w-10 sm:h-10 h-8 w-8   md:w-12 md:h-12"
//         />
//       </div>
//     </div>
//   );

  return (
    <React.Fragment>
      <header className="border-b border-[#fb393f]">
        <nav className="relative px-4 py-4 flex justify-between items-center">
        <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                  fontWeight: isActive ? "bold" : "normal",
                  transition: "all 0.5s ease-in-out",
                })}
              >
          <div className="flex items-center justify-center flex-row lg:ml-4 lg:mr-11">
            <img
              src={logo}
              alt="happiness"
              className="md:h-[95%] md:w-[95%] sm:w-[80%] sm:h-[80%] h-[75%] w-[75%]"

            />
          </div>
          </NavLink>
          <div className="lg:hidden">
            <button
              className="navbar-burger flex items-center justify-center text-mainColor p-3"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <div className="flex items-center justify-center p-1 object-scale-down">
                <img
                  src={burger}
                  alt="burger menu"
                  className="sm:w-8 sm:h-8 h-6 w-6"
                />
              </div>
            </button>
          </div>
          <div className="hidden lg:flex flex-row items-center justify-center p-1">
            <div className="flex flex-row items-center justify-center gap-12 font-zilla p-1">
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                  fontWeight: isActive ? "bold" : "normal",
                  transition: "all 0.5s ease-in-out",
                })}
              >
                <div className="flex item-center justify-center cursor-pointer">
                  Home
                </div>
              </NavLink>
              <NavLink
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                  fontWeight: isActive ? "bold" : "normal",
                  transition: "all 0.5s ease-in-out",
                })}
              >
                {" "}
                <div className="flex item-center justify-center cursor-pointer">
                  About
                </div>
              </NavLink>
              <NavLink
                to="/counseling"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                  fontWeight: isActive ? "bold" : "normal",
                  transition: "all 0.5s ease-in-out",
                })}
              >
                <div className="flex item-center justify-center cursor-pointer">
                  Counseling
                </div>
              </NavLink>
              <NavLink
                to="/events"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                  fontWeight: isActive ? "bold" : "normal",
                  transition: "all 0.5s ease-in-out",
                })}
              >
                {" "}
                <div className="flex item-center justify-center cursor-pointer">
                  Events
                </div>
              </NavLink>
              <NavLink
                to="/team"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                  fontWeight: isActive ? "bold" : "normal",
                  transition: "all 0.5s ease-in-out",
                })}
              >
                <div className="flex item-center justify-center cursor-pointer">
                  Our Team
                </div>
              </NavLink>
              <NavLink
                to="/archive"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                  fontWeight: isActive ? "bold" : "normal",
                  transition: "all 0.5s ease-in-out",
                })}
              >
                <div className="flex item-center justify-center cursor-pointer">
                  Archive
                </div>
              </NavLink>
            </div>
          </div>
          <div className="hidden  lg:flex flex-row items-center justify-center gap-6 font-zilla p-1">
          <a
                href="/#rewards"
              >
            <div className="flex items-center  justify-center bg-[#FCDA69] w-[8rem] h-[2.5rem] p-3 shadow-[4px_4px_rgba(0,0,0,1)]">
                 <p className="text-[.9rem]">Achievements</p>
            </div>
            </a>
          </div>
        </nav>
        <div
          className={
            "navbar-menu relative z-50 lg:hidden" +
            (navbarOpen ? "flex" : " hidden")
          }
        >
           <div className="navbar-backdrop backdrop-blur-sm fixed inset-0 bg-black/40 transition duration-200 ease-in-out"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#!">
                <img src={logo} alt="happiness" className="w-auto h-12" />
              </a>
              <button
                className="navbar-close"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg
                  className="h-6 w-6 text-gray-700 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-start justify-center p-1">
              <div className="flex flex-col items-start justify-center gap-12 font-zilla p-1 text-grey-800">
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    transition: "all 0.5s ease-in-out",
                  })}
                >
                  <div className="flex item-center justify-center cursor-pointer">
                    Home
                  </div>
                </NavLink>
                <NavLink
                  to="/about"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    transition: "all 0.5s ease-in-out",
                  })}
                >
                  {" "}
                  <div className="flex item-center justify-center cursor-pointer">
                    About
                  </div>
                </NavLink>
                <NavLink
                  to="/counseling"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    transition: "all 0.5s ease-in-out",
                  })}
                >
                  <div className="flex item-center justify-center cursor-pointer">
                    Counseling
                  </div>
                </NavLink>
                <NavLink
                  to="/events"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    transition: "all 0.5s ease-in-out",
                  })}
                >
                  {" "}
                  <div className="flex item-center justify-center cursor-pointer">
                    Events
                  </div>
                </NavLink>
                <NavLink
                  to="/team"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    transition: "all 0.5s ease-in-out",
                  })}
                >
                  <div className="flex item-center justify-center cursor-pointer">
                    Our Team
                  </div>
                </NavLink>
                <NavLink
                  to="/archive"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    transition: "all 0.5s ease-in-out",
                  })}
                >
                  <div className="flex item-center justify-center cursor-pointer">
                    Archive
                  </div>
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
        <div className="flex items-center justify-center absolute top-0 right-0 z-[-1]">
          <img src={vector} alt="vector color art" className="w-24 h-24" /> 
        </div>
      </header>
    </React.Fragment>
  );
}
