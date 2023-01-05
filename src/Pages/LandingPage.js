import React from "react";
import hero from "../assets/hero.svg";
import arrow from "../assets/arrow.svg";
import library from "../assets/library.svg";
import meditation from "../assets/meditation.svg";
import counseling from "../assets/counseling.svg";
import speaker from "../assets/speaker.svg";
import library2 from "../assets/library2.svg";
import meditation2 from "../assets/meditation2.svg";
import counseling2 from "../assets/counseling2.svg";
import speaker2 from "../assets/speaker2.svg";
import apply from '../assets/apply.svg';
import manav from '../assets/manav.jpg';

export default function LandingPage(props) {
  return (
    <div className="flex flex-col items-center font-monts gap-6">
      <section className="h-full w-screen flex flex-col justify-center gap-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center mb-2">
          <div className="flex flex-col items-center md:items-start gap-6 w-full h-full md:w-1/2 justify-center">
            <h1 className="font-extrabold text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ml-0 md:ml-6 lg:ml-8 xl:ml-12 p-6 sm:p-8 md:p-0 text-center md:text-start mt-2">
              There is only one <span className="text-[#F3A140]">passion</span>,
              the passion for <span className="text-[#EF1C22]">happiness.</span>
            </h1>
            <div className="flex relative flex-row items-center justify-center gap-6 font-monts ml-0 md:ml-6 lg:ml-8 xl:ml-12">
            <div className="flex items-center absolute justify-center bg-[#FB393F] w-[12rem] h-[2.6rem] p-2">
              <p className="text-sm">Apply Now</p>
              
            </div>
            <div class="absolute bottom-[-1.5rem] right-[-2rem] rotate-[16deg] flex items-center justify-center">
                  <img src={apply} alt="vector library" className="w-[60%] h-[60%]" />
                </div>
            <div className="flex ml-[8px] mt-[10px] items-center justify-center bg-[#000000] w-[12rem] h-[2.5rem] "></div>
          </div>
          
          </div>
          <div className="flex items-center justify-center w-full md:w-1/2">
            <img
              src={hero}
              alt="herosvg"
              className="w-[100%] h-[100%] xs:w-[80%] xs:h-[80%] sm:w-[60%] sm:h-[60%] md:w-[100%] md:h-[100%] lg:w-[90%] lg:h-[90%]"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center p-6 sm:p-4 md:p-6 xl:p-10 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 justify-around p-2 xs:p-6 sm:p-0 md:p-4 lg:p-1">
            <div className="grid-cols-1  bg-[#F45B49]  relative w-full h-full shadow-[6px_6px_rgba(0,0,0,1)]">
              <div class="flex flex-col justify-center gap-6 p-4">
                <div className="flex flex-row justify-start items-center h-full w-full mt-4">
                  <img src={library} alt="arrow next" />
                </div>
                <h1 className="font-bold">Library</h1>
                <div class="flex items-center">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                </div>
                <div className="flex flex-row justify-end items-center">
                  <img src={arrow} alt="arrow next" />
                </div>
                <div class="absolute top-2 right-3 flex items-center justify-center">
                  <img src={library2} alt="vector library" />
                </div>
              </div>
            </div>
            <div className="grid-cols-1 bg-[#FCDA69]  relative w-full h-full shadow-[6px_6px_rgba(0,0,0,1)]">
              <div class="flex flex-col  justify-center gap-6 p-4">
                <div className="flex flex-row justify-start items-center h-full w-full mt-4">
                  <img src={meditation} alt="arrow next" />
                </div>
                <h1 className="font-bold">Meditation</h1>
                <div class="flex items-center">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                </div>
                <div className="flex flex-row justify-end items-center ">
                  <img src={arrow} alt="arrow next" />
                </div>
                <div class="absolute top-2 right-3 flex items-center justify-center">
                  <img src={meditation2} alt="vector library" />
                </div>
              </div>
            </div>
            <div className="grid-cols-1  bg-[#C6FCDB]  relative w-full h-full shadow-[6px_6px_rgba(0,0,0,1)]">
              <div class="flex flex-col justify-center gap-6 p-4">
                <div className="flex flex-row justify-start items-center h-full w-full mt-4">
                  <img src={counseling} alt="arrow next" />
                </div>
                <h1 className="font-bold">Counseling</h1>
                <div class="flex items-center">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                </div>
                <div className="flex flex-row justify-end items-center ">
                  <img src={arrow} alt="arrow next" />
                </div>
                <div class="absolute top-2 right-3 flex items-center justify-center">
                  <img src={counseling2} alt="vector library" />
                </div>
              </div>
            </div>
            <div className="grid-cols-1 bg-[#FEC2D9] relative w-full h-full shadow-[6px_6px_rgba(0,0,0,1)]">
              <div class="flex flex-col  justify-center gap-6 p-4">
                <div className="flex flex-row justify-start items-center h-full w-full mt-4">
                  <img src={speaker} alt="arrow next" />
                </div>
                <h1 className="font-bold">Speaker Session</h1>
                <div class="flex items-center">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                </div>
                <div className="flex flex-row justify-end items-center">
                  <img src={arrow} alt="arrow next" />
                </div>
                <div class="absolute top-2 right-3 flex items-center justify-center">
                  <img src={speaker2} alt="vector library" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-full w-screen flex flex-col justify-center gap-6">
        <div className="flex items-center justify-center h-full w-full">
          <div className="flex flex-col md:flex-row items-center justify-center mt-2 h-full w-full">
          <div className="flex items-center justify-center w-full md:w-1/2 p-1 h-full">
            <img
              src={manav}
              alt="manavjpg"
              className="w-[80%] h-[80%] object-scale-down"
            />
          </div>
              <div className="flex flex-col items-center md:items-start gap-6 w-full h-full md:w-1/2 justify-center">
              <h1 className="font-extrabold text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ml-0 md:ml-2 lg:ml-7 xl:ml-12 p-6 sm:p-8 md:p-0 text-center md:text-start mt-2">
              A <span className="text-[#F3A140]">smile</span>,
              is always the best form of <span className="text-[#EF1C22]">introduction.</span>
            </h1>
            <p className="ml-0 md:ml-2 lg:ml-7 xl:ml-12 p-6 sm:p-8 md:p-0 text-center md:text-start mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <p className="ml-0 md:ml-2 lg:ml-7 xl:ml-12 p-6 sm:p-8 md:p-0 text-center md:text-start mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
