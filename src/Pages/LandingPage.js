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
import apply from "../assets/apply.svg";
import manav from "../assets/manav.jpg";
import line from "../assets/line.svg";
import event from "../assets/event.svg";
import cep from "../assets/cep.svg";
import frame from "../assets/frame.svg";
import frame1 from "../assets/frame1.svg";
import frame2 from "../assets/frame2.svg";
import Quotes from "../component/Quotes";
import mobile from "../assets/mobile.svg";
import achievements from "../assets/achivements.svg";
import achievements2 from "../assets/achivements2.svg";
import { NavLink } from "react-router-dom";
import vector1 from "../assets/Vector1.svg";
import vector2 from "../assets/Vector2.svg";
import vector3 from "../assets/Vector3.svg";
import vector4 from "../assets/Vector4.svg";
import vector5 from "../assets/Vector5.svg";
import vector6 from "../assets/Vector6.svg";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center font-monts gap-6">
      <section className="h-full w-screen flex flex-col justify-center gap-6 relative">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:mb-8 md:mt-2 my-0 mb-2">
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 w-full h-full md:w-1/2 justify-center">
            <h1 className="font-extrabold text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ml-0 md:ml-6 lg:ml-8 xl:ml-12 p-6 sm:p-8 md:p-0 text-center md:text-start mt-2">
              There is only one <span className="text-[#F3A140]">passion</span>,
              the passion for <span className="text-[#EF1C22]">happiness.</span>
            </h1>
            <NavLink
                to="/registration"         
              >
            <div className="flex relative flex-row items-center justify-center gap-6  ml-0 md:ml-6 lg:ml-8 xl:ml-12 p-1 mb-1 font-zilla">
             
              <div className="flex items-center justify-center bg-[#FB393F] w-[12rem] h-[2.6rem] p-2 shadow-[4px_4px_rgba(0,0,0,1)]">
                <p className="text-sm">Apply Now</p>
              </div>
              <div className="absolute bottom-[-1.8rem] right-[-2rem] rotate-[16deg] flex items-center justify-center">
                <img
                  src={apply}
                  alt="vector library"
                  className="w-[60%] h-[60%]"
                />
              </div>
            </div>
            </NavLink>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 xl:gap-6 justify-around p-2 xs:p-6 sm:p-0 md:p-4 lg:p-1">
            <div className="grid-cols-1  relative w-full h-full p-0 xs:p-4 sm:p-2 md:p-6 lg:p-0">
              <div className="flex flex-col relative bg-[#F45B49] h-full w-full justify-center gap-6 p-4 shadow-[6px_6px_rgba(0,0,0,1)] border-[1px] border-black">
                <div className="flex flex-row justify-start items-center  mt-4">
                  <img src={library} alt="arrow next" className="w-12 h-12" />
                </div>
                <h1 className="font-bold">Library</h1>
                <div className="flex items-center">
                  <p className="text-sm md:text-base font-zilla">
                    Any book that helps a child to form a habit of reading, to
                    make reading one of his deep and continuing needs, is good
                    for him. So we have chosen more than 50 books in the
                    Happiness library that give new ideas and lessons by adding
                    some flavor and essence to our life.
                  </p>
                </div>
                <NavLink
                to="/library"         
              >
                <div className="flex flex-row justify-end items-center">
                  <img src={arrow} alt="arrow next" className="w-10 h-10" />
                </div>
                </NavLink>
                <div className="absolute top-2 right-2 flex items-center justify-center">
                  <img
                    src={library2}
                    alt="vector library"
                    className="w-12 h-12"
                  />
                </div>
              </div>
            </div>
            <div className="grid-cols-1  relative w-full h-full p-0 xs:p-4 sm:p-2 md:p-6 lg:p-0">
              <div className="flex flex-col relative bg-[#FCDA69] h-full w-full justify-center gap-6 p-4 shadow-[6px_6px_rgba(0,0,0,1)] border-[1px] border-black">
                <div className="flex flex-row justify-start items-center  mt-4">
                  <img
                    src={meditation}
                    alt="arrow next"
                    className="w-12 h-12"
                  />
                </div>
                <h1 className="font-bold">Meditation</h1>
                <div className="flex items-center">
                  <p className="text-sm md:text-base font-zilla">
                    Happiness Centre offers the following meditations in the
                    Meditation room:- Mindful Breathing Meditation, Guided
                    Meditation, Silence Meditation. Meditation doesn’t only make
                    us more peaceful; it also helps students to be more
                    successful in all life endeavors.
                  </p>
                </div>
                <NavLink
                to="/meditation"         
              >
                <div className="flex flex-row justify-end items-center ">
                  <img src={arrow} alt="arrow next" className="w-10 h-10" />
                </div>
                </NavLink>
                <div className="absolute top-2 right-2 flex items-center justify-center">
                  <img
                    src={meditation2}
                    alt="vector library"
                    className="w-7 h-7"
                  />
                </div>
              </div>
            </div>
            <div className="grid-cols-1   relative w-full h-full p-0 xs:p-4 sm:p-2 md:p-6 lg:p-0">
              <div className="flex flex-col relative h-full w-full bg-[#C6FCDB]  justify-center gap-6 p-4 shadow-[6px_6px_rgba(0,0,0,1)] border-[1px] border-black">
                <div className="flex flex-row justify-start items-center h-full w-full mt-4">
                  <img
                    src={counseling}
                    alt="arrow next"
                    className="w-12 h-12"
                  />
                </div>
                <h1 className="font-bold">Counseling</h1>
                <div className="flex items-center">
                  <p className="text-sm md:text-base font-zilla">
                    Counselling sessions are being taken by Chief Happiness
                    Officer, Manav Bansal where students get a chance to express
                    themselves. In One-To-One Counselling, a student gets an
                    opportunity to receive support and experience growth during
                    challenging times of life.
                  </p>
                </div>
                  <NavLink
                to="/counseling"         
              >
                <div className="flex flex-row justify-end items-center ">
                  <img src={arrow} alt="arrow next" className="w-10 h-10" />
                </div>
                </NavLink>
                <div className="absolute top-2 right-2 flex items-center justify-center">
                  <img
                    src={counseling2}
                    alt="vector library"
                    className="w-12 h-12"
                  />
                </div>
              </div>
            </div>
            <div className="grid-cols-1  relative w-full h-full p-0 xs:p-4 sm:p-2 md:p-6 lg:p-0">
              <div className="flex flex-col relative bg-[#FEC2D9] w-full h-full justify-center gap-6 p-4 shadow-[6px_6px_rgba(0,0,0,1)] border-[1px] border-black">
                <div className="flex flex-row justify-start items-center h-full w-full mt-4">
                  <img src={speaker} alt="arrow next" className="w-12 h-12" />
                </div>
                <h1 className="font-bold">Speaker Session</h1>
                <div className="flex items-center">
                  <p className="text-sm md:text-base font-zilla">
                    A motivational speaker has mastered the art of igniting in
                    others the intrinsic drive for growth and change toward a
                    better future. A motivational speaker encourages individuals
                    to participate. The team's vote of duty and commitment will
                    be strengthened via the use of specialized approaches.
                  </p>
                </div>
                <NavLink
                to="/speaker"         
              >
                <div className="flex flex-row justify-end items-center">
                  <img src={arrow} alt="arrow next" className="w-10 h-10" />
                </div>
                </NavLink>
                <div className="absolute top-2 right-2 flex items-center justify-center">
                  <img
                    src={speaker2}
                    alt="vector library"
                    className="w-10 h-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center absolute top-0 bottom-0 left-0 z-[-1]">
          <img src={vector1} alt="vector color art" className="w-96 h-96 md:w-128 md:h-128" /> 
        </div>
        <div className="flex items-center justify-center absolute top-4 right-0 z-[-1]">
          <img src={vector2} alt="vector color art" className="w-96 h-96 md:w-128 md:h-128" /> 
        </div>
      </section>
      <section className="h-full w-screen relative flex flex-col justify-center mt-4">
        <div className="flex flex-col items-center justify-center h-full w-full p-1 mt-2">
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 h-full w-full">
            <div className="flex flex-col gap-4 items-center justify-center h-full w-full md:w-[46%] p-6 mb-4  md:my-8">
              <div className="flex items-center justify-center p-4 relative">
                <img
                  src={manav}
                  alt="manavjpg"
                  className="w-[90%] z-[10] h-[90%] sm:w-[50%] sm:h-[50%] md:w-[100%] md:h-[100%] lg:w-[75%] lg:h-[75%] xl:w-[60%] xl:h-[60%] object-scale-down"
                />
                <img
                  src={frame}
                  alt="frame"
                  className="w-[100%] absolute h-[100%] sm:w-[60%] sm:h-[60%] md:w-[100%] md:h-[100%] left-4 top-4 sm:left-10 sm:top-4"
                />
                <img
                  src={frame1}
                  alt="frame1"
                  className="w-[100%] absolute h-[100%] sm:w-[60%] sm:h-[60%] md:w-[100%] md:h-[100%] bottom-2 right-2 sm:bottom-4 sm:right-4"
                />
                <img
                  src={frame2}
                  alt="frame2"
                  className="w-[100%] absolute h-[100%] sm:w-[60%] sm:h-[60%] md:w-[100%] md:h-[100%] right-4 sm:right-6"
                />
              </div>
              <h2 className="font-medium font-zilla">MR. MANAV BANSAL</h2>
            </div>
            <div className="flex flex-col items-center md:items-start md:gap-6 w-full h-full md:w-[54%] justify-center mb-4  md:my-8">
              <div className="flex items-center justify-center">
                <h1 className="font-extrabold text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ml-0 md:ml-2 lg:ml-4 xl:ml-6 p-4 sm:p-6 md:p-2 lg:p-1 text-center md:text-start">
                  A <span className="text-[#F3A140]">smile</span>, is always the
                  best form of{" "}
                  <span className="text-[#EF1C22]">introduction.</span>
                </h1>
              </div>

              <div className="flex items-center justify-center font-zilla">
                <p className="lg:w-[92%] text-xs sm:text-sm md:text-base lg:text-lg  ml-0 md:ml-1 lg:ml-0  p-4 sm:p-6 md:p-2 lg:p-0 text-center md:text-start ">
                  He graduated from BTech(CSE), then pursued LLB, he did MBA in
                  HR .He has an experience of 16 years of HR at companies like
                  Emaar,Max. Lastly he was a director HR at Shoolini University
                  ,then he chose his passion to spread happiness and now he is
                  Chief Happiness Officer at Chitkara University.He is on this
                  journey of happiness from last 20 years dating back to earlier
                  college days.He is currently doing PhD in Happiness.
                </p>
              </div>
              <div className="flex items-center justify-center font-zilla">
                <p className="lg:w-[92%] text-xs  sm:text-sm md:text-base lg:text-lg  ml-0 md:ml-1 lg:ml-0 p-4 sm:p-6 md:p-2 lg:p-0 text-center md:text-start ">
                  Expertise in taking Sessions for elevating Student
                  Inspiration, Motivation, and Development on Different topics
                  like Time Management, Communication Skills, Healthy Lifestyle,
                  Balanced Life, Meditation – Art of Inner Management, Goal
                  Setting, IKIGAI for Happiness, How to figure out true talent,
                  etc.
                </p>
              </div>
              <NavLink
                to="/team"         
              >
              <div className="flex relative flex-row items-center justify-center gap-6 my-2  ml-0 md:ml-2 lg:ml-6 xl:ml-10 p-1 font-zilla">
                <div className="flex items-center justify-center bg-[#FCDA69] w-[11rem] h-[2.5rem] p-2 shadow-[4px_4px_rgba(0,0,0,1)]">
                  <p className="text-xs">MEET THE TEAM</p>
                </div>
              </div>
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full p-4">
            <div className="flex flex-col items-center justify-center w-full h-full p-4">
              <h1 className="font-monts font-bold flex items-center justify-center gap-2  text-xl sm:text-4xl p-1 uppercase">
                OUR <span className="text-[#EF1C22]">AMBASSADORS</span>
              </h1>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-full">
              {/* Ambassadors addition here */}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center absolute top-0 bottom-0 right-0 z-[-1]">
          <img src={vector3} alt="vector color art" className="w-96 h-96 md:w-128 md:h-128" /> 
        </div>
      </section>
      <section className="w-screen relative h-full  md:h-screen flex items-center justify-center">
        <div className="flex h-full w-full flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 w-full h-full md:w-[40%] justify-center my-6 md:my-0">
            <div className="flex items-center justify-center relative ml-0 md:ml-5 lg:ml-7 xl:ml-11 p-1 mt-2">
              <h1 className="font-extrabold text-4xl xs:text-5xl sm:text-5xl md:text-[2.5rem] lg:text-5xl xl:text-7xl  sm:p-4 md:p-0 text-center md:text-start p-1">
                WEEKLY
                <span className="text-[#F3A140]">
                  <br />
                  SCHEDULE
                </span>
              </h1>
              <div className="flex items-center justify-center absolute right-[2rem] top-[1rem]">
                <img
                  src={line}
                  alt="line svg"
                  className="rotate-[120deg] h-14 w-14"
                />
              </div>
            </div>
            <div className="flex relative flex-row items-center justify-center gap-3 sm:gap-6  ml-0 md:ml-5 lg:ml-7 xl:ml-11 p-1 mb-1 font-zilla">
            <NavLink
                to="/events"         
              >
              <div className="flex items-center justify-center bg-[#FB393F] w-[8rem] h-[2.6rem] md:w-[7rem] md:h-[2.5rem] lg:w-[8rem] lg:h-[2.6rem] p-2 shadow-[4px_4px_rgba(0,0,0,1)]">
                <p className="text-sm">PAST EVENT</p>
              </div>
              </NavLink>
              <NavLink
                to="/events"         
              >
              <div className="flex items-center justify-center bg-[#FCDA69]  w-[8rem] h-[2.6rem]  md:w-[7rem] md:h-[2.5rem] lg:w-[8rem] lg:h-[2.6rem] p-2 shadow-[4px_4px_rgba(0,0,0,1)]">
                <p className="text-sm">UPCOMING</p>
              </div>
              </NavLink>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full md:w-[60%] my-8 md:m-0">
            <div className="flex flex-col sm:flex-row h-full w-full items-center justify-center gap-4 p-4 md:gap-4 md:p-2 lg:gap-4 lg:p-4 xl:gap-6 xl:p-6">
              <div className="flex flex-col h-[70%] lg:h-[75%] bg-white xl:h-[80%] w-4/5 md:w-1/2 items-center justify-center shadow-[5px_6px_rgba(0,0,0,1)] border-[1px] border-black">
                <div className="h-[25%] w-full p-1">
                  <div className="flex items-center justify-start p-1 w-full h-full">
                    <img
                      src={event}
                      alt="event"
                      className="w-16 h-16 ml-2 m-1"
                    />
                  </div>
                </div>
                <div className="h-[25%] w-full bg-[#FB393F] flex items-center justify-center md:justify-start p-1 border-t-[1px] border-black">
                  <h1 className="font-semibold text-2xl xs:text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl md:ml-2 p-4 md:p-0">
                    EVENTS
                  </h1>
                </div>
                <div className="h-[25%] w-full flex flex-row items-center justify-around gap-6 border-t-[1px] border-b-[1px] border-black p-4 md:p-1 font-zilla">
                  <div className="h-full w-full flex flex-row items-center justify-between p-2">
                    <div className="flex items-center justify-center p-1">
                      <p className="font-normal text-base xs:text-lg sm:text-xl lg:text-2xl">
                        TOTAL NO.
                      </p>
                    </div>
                    <div className="flex items-center justify-center p-1">
                      <p className="font-normal text-base xs:text-lg sm:text-xl lg:text-2xl">
                        20
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-[25%] w-full flex flex-row items-center justify-around gap-6  p-4 md:p-1 font-zilla">
                  <div className="h-full w-full flex flex-row items-center justify-between p-2">
                    <div className="flex items-center justify-center p-1">
                      <p className="font-normal text-base xs:text-lg sm:text-xl lg:text-2xl">
                        TOTAL NO.
                      </p>
                    </div>
                    <div className="flex items-center justify-center p-1">
                      <p className="font-normal text-base xs:text-lg sm:text-xl lg:text-2xl">
                        20
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[70%] bg-white lg:h-[75%] xl:h-[80%] w-4/5 md:w-1/2 items-center justify-center shadow-[5px_6px_rgba(0,0,0,1)] border-[1px] border-black">
                <div className="h-[25%] w-full p-1">
                  <div className="flex items-center justify-start p-1 w-full h-full">
                    <img src={cep} alt="cep" className="w-16 h-16 ml-2 m-1" />
                  </div>
                </div>
                <div className="h-[25%] w-full bg-[#FCDA69] flex items-center justify-center md:justify-start p-1  border-t-[1px] border-black">
                  <h1 className="font-semibold text-2xl xs:text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl md:ml-2 p-4 md:p-0">
                    CEP/CLASSES
                  </h1>
                </div>
                <div className="h-[25%] w-full flex flex-row items-center justify-around gap-6 border-t-[1px] border-b-[1px] border-black p-4 md:p-1 font-zilla">
                  <div className="h-full w-full flex flex-row items-center justify-between p-2">
                    <div className="flex items-center justify-center p-1">
                      <p className="font-normal text-base xs:text-lg sm:text-xl lg:text-2xl">
                        TOTAL NO.
                      </p>
                    </div>
                    <div className="flex items-center justify-center p-1">
                      <p className="font-normal text-base xs:text-lg sm:text-xl lg:text-2xl">
                        20
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-[25%] w-full flex flex-row items-center justify-around gap-6  p-4 md:p-1 font-zilla">
                  <div className="h-full w-full flex flex-row items-center justify-between p-2">
                    <div className="flex items-center justify-center p-1">
                      <p className="font-normal text-base xs:text-lg sm:text-xl lg:text-2xl">
                        TOTAL NO.
                      </p>
                    </div>
                    <div className="flex items-center justify-center p-1">
                      <p className="font-normal text-base xs:text-lg sm:text-xl lg:text-2xl">
                        20
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center absolute top-0 bottom-0 left-0 right-0 z-[-1]">
          <img src={vector2} alt="vector color art" className="w-96 h-96 md:w-128 md:h-128" /> 
        </div>
        <div className="flex items-center justify-center absolute  bottom-4 right-0 z-[-1]">
          <img src={vector4} alt="vector color art" className="w-96 h-96 md:w-128 md:h-128" /> 
        </div>
      </section>
      <section className="w-screen h-full relative flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col md:flex-row items-center justify-center w-full h-full p-1 my-1">
            <div className="flex flex-col items-center justify-center w-full  my-2 h-[24rem] p-1">
              <div className="flex flex-col items-center justify-center w-full h-[25%] p-4">
                <h1 className="font-monts font-bold flex items-center justify-center gap-2  text-3xl p-1">
                  Happiness <span className="text-[#FB393F]"> Quotes</span>
                </h1>
              </div>
              <Quotes />
              <div className="flex items-center justify-end w-full  p-2 h-[36%]">
                <img src={mobile} alt="mobile" className="w-36 h-36" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full my-2 h-[24rem] p-1">
              <div className="flex flex-col items-center justify-center w-full h-[25%] p-4">
                <h1 className="font-monts font-bold flex items-center justify-center gap-2 text-3xl p-1 w-full h-full">
                  Notice <span className="text-[#FC762B]">Board</span>
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-[18%] p-2">
                <p className="font-zilla font-normal flex items-center text-center justify-center gap-2 text-xl p-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-[18%] p-2">
                <p className="font-zilla font-normal flex items-center text-center justify-center gap-2 text-xl p-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-[18%] p-2">
                <p className="font-zilla font-normal flex items-center text-center justify-center gap-2 text-xl p-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-[18%] p-2">
                <p className="font-zilla font-normal flex items-center text-center justify-center gap-2 text-xl p-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full p-4">
            <div className="flex flex-col items-center justify-center w-full h-full p-4">
              <h1 className="font-monts font-bold flex items-center justify-center gap-2  text-3xl sm:text-4xl p-1 uppercase text-[#FC762B]">
                Testimonials
              </h1>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-full">
              {/* Testimonials addition here */}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center absolute bottom-0 left-0 z-[-1]">
          <img src={vector5} alt="vector color art" className="w-96 h-96 md:w-128 md:h-128" /> 
        </div>
      </section>
      <section className="w-screen h-full relative flex items-center justify-center" id="rewards">
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex items-center flex-col justify-center w-full h-full gap-1">
            <div className="flex flex-col items-center justify-center  p-4 my-1">
              <h1 className="font-monts font-bold flex items-center justify-center gap-2 text-lg xs:text-xl sm:text-4xl p-1 uppercase ">
                Rewards&<span className="text-[#F55C4A]">Achievements</span>
              </h1>
            </div>
            <div className="flex flex-row items-center justify-center w-full sm:w-[75%] h-full p-4 sm:p-6 gap-4">
              <div className="w-1/2 bg-white h-full flex flex-col items-center justify-center gap-2 shadow-[6px_6px_rgba(0,0,0,1)] border-[1px] border-black">
                <div className="p-1 mt-4">
                  <img src={achievements} alt="avatar" className="w-20 h-20 sm:w-24 sm:h-24" />
                </div>
                <div className="p-1">
                  {" "}
                  <h1 className="my-1 text-base md:text-lg font-zilla">
                    Vansh
                  </h1>
                </div>
                <div className="p-1">
                  {" "}
                  <p className="mb-2 text-base md:text-lg font-zilla">
                    1st Runner Up
                  </p>
                </div>
              </div>
              <div className="w-1/2 bg-white h-full flex flex-col items-center justify-center gap-2 shadow-[6px_6px_rgba(0,0,0,1)] border-[1px] border-black">
                <div className="p-1 mt-4">
                  {" "}
                  <img src={achievements2} alt="avatar" className="w-20 h-20 sm:w-24 sm:h-24" />
                </div>
                <div className="p-1">
                  {" "}
                  <h1 className="my-1 text-base md:text-lg font-zilla">
                    Vrinda
                  </h1>
                </div>
                <div className="p-1">
                  {" "}
                  <p className="mb-2 text-base md:text-lg font-zilla">
                    2nd Runner Up
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full h-full p-4">
              <div className="flex flex-col bg-white items-center justify-center w-[90%] sm:w-[75%] h-full shadow-[6px_6px_rgba(0,0,0,1)] border-[1px] border-black">
                <div className="p-1 mt-4">
                  <h1 className="my-1 text-base md:text-lg font-monts uppercase">
                    LeaderBoard
                  </h1>
                </div>
                <div className="flex items-center flex-col justify-center w-full h-full p-4">
                  <div className="flex items-center justify-around w-full h-full p-4">
                    <p className="text-xl font-zilla">1. Vrinda</p>
                    <p className="text-xl font-zilla">Winner</p>
                  </div>
                  <div className="flex items-center justify-around w-full h-full p-4">
                    <p className="text-xl font-zilla">2. Vrinda</p>
                    <p className="text-xl font-zilla">Winner</p>
                  </div>
                  <div className="flex items-center justify-around w-full h-full p-4">
                    <p className="text-xl font-zilla">3. Vrinda</p>
                    <p className="text-xl font-zilla">Winner</p>
                  </div>
                  <div className="flex items-center justify-around w-full h-full p-4">
                    <p className="text-xl font-zilla">4. Vrinda</p>
                    <p className="text-xl font-zilla">Winner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center absolute  bottom-0 right-0 z-[-1]">
          <img src={vector6} alt="vector color art" className="w-96 h-96 md:w-128 md:h-128" /> 
        </div>
      </section>
    </div>
  );
}
