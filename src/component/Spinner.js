import React from "react";
import spinner from "../assets/spinner.svg";

export default function Spinner() {
  return (
    <div className="flex fixed left-0 right-0 bottom-0 top-0 z-50 items-center justify-center w-full h-full bg-white overflow-hidden">
      <div>
        <img src={spinner} alt="Loading..." className="h-24" />
      </div>
    </div>
  );
}
