import React from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import youtube from "../assets/youtube.svg";

export default function Footer() {
  return (
    <div className="flex items-center justify-around flex-row p-1 bg-white border-t border-[#fcda69]">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          fontWeight: isActive ? "bold" : "normal",
          transition: "all 0.5s ease-in-out",
        })}
      >
        <div className="flex items-center justify-center flex-row">
          <img src={logo} alt="happiness" className="w-12 h-12" />
        </div>
      </NavLink>
      <p className="font-zilla text-xs sm:text-sm flex items-center justify-center flex-wrap text-center select-none hover:underline cursor-pointer">
        COPYRIGHT &copy; ALL RIGHTS RESERVED
      </p>
      <div className="flex items-center justify-center flex-row gap-2">
        <a
          href="https://www.instagram.com/chitkarahappinesscentre/"
          target="_blank"
          className="cursor-pointer hover:scale-[1.25] transition-all duration-300 ease-in-out"
        >
          <img src={instagram} alt="instagram" className="w-4 h-4" />
        </a>
        <a
          href="https://www.youtube.com/@junoon-treasureofhappiness5956"
          target="_blank"
          className="cursor-pointer hover:scale-[1.25] transition-all duration-300 ease-in-out"
        >
          <img src={youtube} alt="youtube" className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/company/chitkara-happiness-center/about/"
          target="_blank"
          className="cursor-pointer hover:scale-[1.25] transition-all duration-300 ease-in-out"
        >
          <img src={linkedin} alt="linkedin" className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
