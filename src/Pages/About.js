import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
import frame from "../assets/frame.svg";
import frame1 from "../assets/frame1.svg";
import frame2 from "../assets/frame2.svg";
import { NavLink } from "react-router-dom";
import vector3 from "../assets/Vector3.svg";
import manav from "../assets/manav.jpg";
import amandeep from "../assets/amandeep.jpg";
import anupama from "../assets/anupama.jpg";
import ashutosh from "../assets/ashutosh.jpg";
import atul from "../assets/atul.jpg";
import dhiresh from "../assets/dhiresh.jpg";
import gitanjali from "../assets/gitanjali.jpg";
import gopal from "../assets/gopal.jpg";
import isha from "../assets/isha.jpg";
import jyoti from "../assets/jyoti.jpg";
import onkar from "../assets/onkar.jpg";
import rashmi from "../assets/rashmi.jpg";
import sandhir from "../assets/sandhir.jpg";
import shivani from "../assets/shivani.jpg";
import sidharth from "../assets/sidhath.jpg";
import sonia from "../assets/sonia.jpg";
import sumit from "../assets/sumit.jpg";
import vijay from "../assets/vijay.jpeg";
import ajay from "../assets/ajay.jpeg";
import sovia from "../assets/sovia.jpeg";
import sonika from "../assets/sonika.jpeg";
import sanjay from "../assets/sanjay.jpeg";
import neeti from "../assets/neeti.jpeg";
import harmeet from "../assets/harmeet.jpeg";
import deepak from "../assets/deepak.jpeg";
import amit from "../assets/amit.jpeg";
import jasmeet from "../assets/jasmeet .jpg";
import monit from "../assets/monit.jpg";
import renu from "../assets/renu.jpg";

export default function About() {
  const ambassadors = [
    {
      name: "Dr. Praveen Kumar Khosla",
      position: "Pro Vice Chancellor",
      description:
        "Happiness is not something ready-made. It comes from your own actions.",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Dr. Monit Kapoor",
      position: "Dean",
      description:
        "The happiness of your life depends upon the quality of your thoughts.",
      img: monit,
    },
    {
      name: "Dr. Deepak Thakur",
      position: "Head (Academic Operations)",
      description:
        "The happiest people don't have the best of everything, they just make the best of everything.",
      img: deepak,
    },
    {
      name: "Dr. Shivani Malhotra",
      position: "ECE Department",
      description:
        "Happiness is the art of never holding in your mind the memory of any unpleasant thing that has passed.",
      img: shivani,
    },
    {
      name: "Dr. Isha",
      position: "ECE Department",
      description:
        "Happiness is a choice. You can choose to be happy. There's going to be stress in life, but it's your choice whether you let it affect you or not.",
      img: isha,
    },
    {
      name: "Dr. Vijay Kumar Jadon",
      position: "Dean (Academic Affairs)",
      description:
        "Happiness is not a station you arrive at, but a manner of traveling",
      img: vijay,
    },
    {
      name: "Dr. Ajay Goyal",
      position: "Dean",
      description:
        "Happiness is not a station you arrive at, but a manner of traveling",
      img: ajay,
    },
    {
      name: "Dr. Sandhir Sharma",
      position: "Pro Vice Chancellor",
      description:
        "Happiness is not a station you arrive at, but a manner of traveling",
      img: sandhir,
    },
    {
      name: "Dr. Dhiresh Kulsherstha",
      position: "Dean (Economics)",
      description:
        "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
      img: dhiresh,
    },
    {
      name: "Dr. Rashmi Aggarwal",
      position: "Dean (Commerce)",
      description:
        "Happiness is not the absence of problems, it's the ability to deal with them.",
      img: rashmi,
    },
    {
      name: "Dr. Ashutosh Mishra",
      position: "Dean",
      description:
        "Happiness is a perfume you cannot pour on others without getting a few drops on yourself.",
      img: ashutosh,
    },
    {
      name: "Dr. Gitanjali Kalia",
      position: "Assistant Professor",
      description:
        "The happiness of your life depends upon the quality of your relationships.",
      img: gitanjali,
    },
    {
      name: "Prof. Atul Dutta",
      position: "Dean (Interior Design)",
      description:
        "The greatest happiness you can have is knowing that you are loved for who you are.",
      img: atul,
    },
    {
      name: "Dr. Sumit Wadhera",
      position: "Dean Academic",
      description:
        "The secret of happiness is not in doing what one likes, but in liking what one does.",
      img: sumit,
    },
    {
      name: "Dr. Anupama",
      position: "HOD",
      description:
        "Happiness is when what you think, what you say, and what you do are in harmony",
      img: anupama,
    },
    {
      name: "Dr. Jyoti",
      position: "Assistant Professor",
      description:
        "Happiness is not a possession to be prized, it is a quality of thought, a state of mind",
      img: jyoti,
    },
    {
      name: "Dr. Sovia R J Singh",
      position: "Dean",
      description:
        "Happiness is not a possession to be prized, it is a quality of thought, a state of mind",
      img: sovia,
    },
    {
      name: "Ms. Aarti Joshi",
      position: "Dean",
      description:
        "Happiness is not a possession to be prized, it is a quality of thought, a state of mind",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Dr. Neeti Sethi",
      position: "Dean",
      description:
        "Happiness is not a possession to be prized, it is a quality of thought, a state of mind",
      img: neeti,
    },
    {
      name: "Dr. Onkar Bedi",
      position: "Assistant Dean",
      description:
        "Happiness is not a possession to be prized, it is a quality of thought, a state of mind",
      img: onkar,
    },
    {
      name: "Dr. Sonia Dhiman",
      position: "Assistant Dean",
      description:
        "Happiness is not a possession to be prized, it is a quality of thought, a state of mind",
      img: sonia,
    },
    {
      name: "Mr. Gopal Meena",
      position: "Vise President",
      description:
        "Happiness is when what you think, what you say, and what you do are in harmony",
      img: gopal,
    },
    {
      name: "Mr. Sanjay Jangid",
      position: "Dean (Animation)",
      description:
        "Happiness is when what you think, what you say, and what you do are in harmony",
      img: sanjay,
    },
    {
      name: "Dr. Vaibhavi Pruthviraj Ranavaade",
      position: "Dean (Fashion Design)",
      description:
        "Happiness is when what you think, what you say, and what you do are in harmony",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Dr. Jasneet Kaur",
      position: "Associate Professor",
      description:
        "Happiness is when what you think, what you say, and what you do are in harmony",
      img: jasmeet,
    },
    {
      name: "Dr. Sonika Bakshi",
      position: "Dean",
      description:
        "Happiness is the art of never holding in your mind the memory of any unpleasant thing that has passed.",
      img: sonika,
    },
    {
      name: "Dr. Amandeep Singh",
      position: "Principal (Physiotherapy)",
      description:
        "The greatest happiness you can have is knowing that you do not necessarily require happiness",
      img: amandeep,
    },
    {
      name: "Dr. Harmeet Kaur",
      position: "Principal",
      description:
        "The greatest happiness you can have is knowing that you do not necessarily require happiness",
      img: harmeet,
    },
    {
      name: "Dr. Renu Ranjit Thakur",
      position: "HOD",
      description:
        "The greatest happiness you can have is knowing that you do not necessarily require happiness",
      img: renu,
    },
    {
      name: "Dr. Sidarth Bedi",
      position: "Assistant Professor",
      description:
        "Happiness is a state of mind. It's just according to the way you look at things",
      img: sidharth,
    },
    {
      name: "Mr. Amit Gupta",
      position: "Professor",
      description:
        "The greatest happiness you can have is knowing that you do not necessarily require happiness",
      img: amit,
    },
  ];
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <>
      <section className="flex items-center justify-center gap-2 flex-col pt-[6rem]">
        <div className="w-screen p-3 h-full">
          <h1 className="font-monts font-bold flex items-center justify-start ml-4 sm:ml-6 md:ml-12 gap-2 text-3xl xs:text-4xl lg:text-6xl p-1 uppercase">
            About<span className="text-[#EF1C22]"> Us</span>
          </h1>
        </div>
      </section>
      <section className="h-full w-screen relative flex flex-col justify-center my-2 p-2">
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
            <div className="flex flex-col items-center md:items-start md:gap-6 w-full h-full md:w-[54%] justify-center mb-4  md:my-8 ml-0 md:ml-2 lg:ml-4 xl:ml-6">
              <div className="flex items-center justify-center">
                <h1 className="font-extrabold text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  p-4 sm:p-6 md:p-2 lg:p-1 text-center md:text-start">
                  A <span className="text-[#F3A140]">smile</span>, is always the
                  best form of{" "}
                  <span className="text-[#EF1C22]">introduction.</span>
                </h1>
              </div>

              <div className="flex items-center justify-start font-zilla">
                <p className="lg:w-[92%] text-xs sm:text-sm md:text-base lg:text-lg  p-4 sm:p-6 md:p-2 lg:p-0 text-center md:text-start ">
                  He graduated from BTech(CSE), then pursued LLB, he did MBA in
                  HR .He has an experience of 16 years of HR at companies like
                  Emaar,Max. Lastly he was a director HR at Shoolini University
                  ,then he chose his passion to spread happiness and now he is
                  Chief Happiness Officer at Chitkara University.He is on this
                  journey of happiness from last 20 years dating back to earlier
                  college days.He is currently doing PhD in Happiness.
                </p>
              </div>
              <div className="flex items-center justify-start font-zilla">
                <p className="lg:w-[92%] text-xs  sm:text-sm md:text-base lg:text-lg  p-4 sm:p-6 md:p-2 lg:p-0 text-center md:text-start ">
                  Expertise in taking Sessions for elevating Student
                  Inspiration, Motivation, and Development on Different topics
                  like Time Management, Communication Skills, Healthy Lifestyle,
                  Balanced Life, Meditation – Art of Inner Management, Goal
                  Setting, IKIGAI for Happiness, How to figure out true talent,
                  etc.
                </p>
              </div>
              <NavLink to="/team">
                <div className="flex relative flex-row items-center justify-center gap-6 my-2 p-1 font-zilla">
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
                OUR <span className="text-[#EF1C22]"> AMBASSADORS</span>
              </h1>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-full">
              <div className="flex  justify-center w-screen p-2">
                <Swiper
                  modules={[Navigation, Pagination, EffectFade, Autoplay]}
                  slidesPerView={5}
                  spaceBetween={50}
                  autoplay={{ delay: 2500 }}
                  breakpoints={{
                    300: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    500: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    1280: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                  }}
                >
                  {ambassadors.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex w-full h-full items-center justify-center flex-col bg-white rounded-md border border-gray-500 p-4">
                        <div className="w-full items-center flex justify-start">
                          <div className="rounded-full p-1 border-2 border-red-600">
                            <img
                              src={item.img}
                              alt="images"
                              className="w-16 h-16 rounded-full"
                            />
                          </div>
                        </div>
                        <div className="w-full flex flex-col justify-start items-start p-2">
                          <h1 className="font-bold font-monts">{item.name}</h1>
                          <p className="font-zilla text-base">
                            {item.position}
                          </p>
                        </div>
                        <div className="p-2 flex flex-1 items-start justify-center w-full">
                          <p className="font-zilla flex-1 text-start w-full">
                            {item.description}
                          </p>
                        </div>{" "}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center absolute top-0 bottom-0 right-0 z-[-1]">
          <img
            src={vector3}
            alt="vector color art"
            className="w-96 h-96 md:w-128 md:h-128"
          />
        </div>
      </section>
    </>
  );
}
