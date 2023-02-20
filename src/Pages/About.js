import React from 'react'
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

export default function About() {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <>    
    <section className="flex items-center justify-center gap-2 flex-col my-6">
    <div className="w-screen p-3 h-full"><h1 className='font-monts font-bold flex items-center justify-start ml-4 sm:ml-6 md:ml-12 gap-2 text-3xl xs:text-4xl lg:text-6xl p-1 uppercase'>About<span className="text-[#EF1C22]"> Us</span></h1></div>
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
           <NavLink
             to="/team"         
           >
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
         <div className="flex items-center justify-center w-screen p-2">
 <Swiper
   modules={[Navigation, Pagination, EffectFade, Autoplay]}
   slidesPerView={5}
   spaceBetween={50}
   autoplay={{ delay: 2500 }}
   breakpoints={{
     300:{
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
     }
   }}
 >
  
 <SwiperSlide><div className="flex items-center w-full h-full justify-center flex-col bg-white rounded-md border border-gray-500 p-4"><div className="w-full h-full p-2 items-center flex justify-start"><div className="h-full rounded-full p-1 border-2 border-red-600"><img src='https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4' alt="images" className="w-16 h-16 rounded-full"/></div></div><div className="w-full flex justify-between items-center h-full p-2"><h1 className="font-bold font-monts">Yakshit Garg</h1><p className="font-zilla text-base">Web Head</p></div><div className="p-2 flex items-center justify-center w-full"><p className="font-zilla text-start w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div> </div></SwiperSlide>
 <SwiperSlide><div className="flex items-center w-full h-full justify-center flex-col bg-white rounded-md border border-gray-500 p-4"><div className="w-full h-full p-2 items-center flex justify-start"><div className="h-full rounded-full p-1 border-2 border-red-600"><img src='https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4' alt="images" className="w-16 h-16 rounded-full"/></div></div><div className="w-full flex justify-between items-center h-full p-2"><h1 className="font-bold font-monts">Yakshit Garg</h1><p className="font-zilla text-base">Web Head</p></div><div className="p-2 flex items-center justify-center w-full"><p className="font-zilla text-start w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div> </div></SwiperSlide>
 <SwiperSlide><div className="flex items-center w-full h-full justify-center flex-col bg-white rounded-md border border-gray-500 p-4"><div className="w-full h-full p-2 items-center flex justify-start"><div className="h-full rounded-full p-1 border-2 border-red-600"><img src='https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4' alt="images" className="w-16 h-16 rounded-full"/></div></div><div className="w-full flex justify-between items-center h-full p-2"><h1 className="font-bold font-monts">Yakshit Garg</h1><p className="font-zilla text-base">Web Head</p></div><div className="p-2 flex items-center justify-center w-full"><p className="font-zilla text-start w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div> </div></SwiperSlide>
 <SwiperSlide><div className="flex items-center w-full h-full justify-center flex-col bg-white rounded-md border border-gray-500 p-4"><div className="w-full h-full p-2 items-center flex justify-start"><div className="h-full rounded-full p-1 border-2 border-red-600"><img src='https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4' alt="images" className="w-16 h-16 rounded-full"/></div></div><div className="w-full flex justify-between items-center h-full p-2"><h1 className="font-bold font-monts">Yakshit Garg</h1><p className="font-zilla text-base">Web Head</p></div><div className="p-2 flex items-center justify-center w-full"><p className="font-zilla text-start w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div> </div></SwiperSlide>
 <SwiperSlide><div className="flex items-center w-full h-full justify-center flex-col bg-white rounded-md border border-gray-500 p-4"><div className="w-full h-full p-2 items-center flex justify-start"><div className="h-full rounded-full p-1 border-2 border-red-600"><img src='https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4' alt="images" className="w-16 h-16 rounded-full"/></div></div><div className="w-full flex justify-between items-center h-full p-2"><h1 className="font-bold font-monts">Yakshit Garg</h1><p className="font-zilla text-base">Web Head</p></div><div className="p-2 flex items-center justify-center w-full"><p className="font-zilla text-start w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div> </div></SwiperSlide>
 <SwiperSlide><div className="flex items-center w-full h-full justify-center flex-col bg-white rounded-md border border-gray-500 p-4"><div className="w-full h-full p-2 items-center flex justify-start"><div className="h-full rounded-full p-1 border-2 border-red-600"><img src='https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4' alt="images" className="w-16 h-16 rounded-full"/></div></div><div className="w-full flex justify-between items-center h-full p-2"><h1 className="font-bold font-monts">Yakshit Garg</h1><p className="font-zilla text-base">Web Head</p></div><div className="p-2 flex items-center justify-center w-full"><p className="font-zilla text-start w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div> </div></SwiperSlide>
 <SwiperSlide><div className="flex items-center w-full h-full justify-center flex-col bg-white rounded-md border border-gray-500 p-4"><div className="w-full h-full p-2 items-center flex justify-start"><div className="h-full rounded-full p-1 border-2 border-red-600"><img src='https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4' alt="images" className="w-16 h-16 rounded-full"/></div></div><div className="w-full flex justify-between items-center h-full p-2"><h1 className="font-bold font-monts">Yakshit Garg</h1><p className="font-zilla text-base">Web Head</p></div><div className="p-2 flex items-center justify-center w-full"><p className="font-zilla text-start w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div> </div></SwiperSlide>
 <SwiperSlide><div className="flex items-center w-full h-full justify-center flex-col bg-white rounded-md border border-gray-500 p-4"><div className="w-full h-full p-2 items-center flex justify-start"><div className="h-full rounded-full p-1 border-2 border-red-600"><img src='https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4' alt="images" className="w-16 h-16 rounded-full"/></div></div><div className="w-full flex justify-between items-center h-full p-2"><h1 className="font-bold font-monts">Yakshit Garg</h1><p className="font-zilla text-base">Web Head</p></div><div className="p-2 flex items-center justify-center w-full"><p className="font-zilla text-start w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div> </div></SwiperSlide>
 <SwiperSlide><div className="flex items-center w-full h-full justify-center flex-col bg-white rounded-md border border-gray-500 p-4"><div className="w-full h-full p-2 items-center flex justify-start"><div className="h-full rounded-full p-1 border-2 border-red-600"><img src='https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4' alt="images" className="w-16 h-16 rounded-full"/></div></div><div className="w-full flex justify-between items-center h-full p-2"><h1 className="font-bold font-monts">Yakshit Garg</h1><p className="font-zilla text-base">Web Head</p></div><div className="p-2 flex items-center justify-center w-full"><p className="font-zilla text-start w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div> </div></SwiperSlide>
 <SwiperSlide><div className="flex items-center w-full h-full justify-center flex-col bg-white rounded-md border border-gray-500 p-4"><div className="w-full h-full p-2 items-center flex justify-start"><div className="h-full rounded-full p-1 border-2 border-red-600"><img src='https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4' alt="images" className="w-16 h-16 rounded-full"/></div></div><div className="w-full flex justify-between items-center h-full p-2"><h1 className="font-bold font-monts">Yakshit Garg</h1><p className="font-zilla text-base">Web Head</p></div><div className="p-2 flex items-center justify-center w-full"><p className="font-zilla text-start w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div> </div></SwiperSlide>
 <SwiperSlide><div className="flex items-center w-full h-full justify-center flex-col bg-white rounded-md border border-gray-500 p-4"><div className="w-full h-full p-2 items-center flex justify-start"><div className="h-full rounded-full p-1 border-2 border-red-600"><img src='https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4' alt="images" className="w-16 h-16 rounded-full"/></div></div><div className="w-full flex justify-between items-center h-full p-2"><h1 className="font-bold font-monts">Yakshit Garg</h1><p className="font-zilla text-base">Web Head</p></div><div className="p-2 flex items-center justify-center w-full"><p className="font-zilla text-start w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div> </div></SwiperSlide>
 <SwiperSlide><div className="flex items-center w-full h-full justify-center flex-col bg-white rounded-md border border-gray-500 p-4"><div className="w-full h-full p-2 items-center flex justify-start"><div className="h-full rounded-full p-1 border-2 border-red-600"><img src='https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4' alt="images" className="w-16 h-16 rounded-full"/></div></div><div className="w-full flex justify-between items-center h-full p-2"><h1 className="font-bold font-monts">Yakshit Garg</h1><p className="font-zilla text-base">Web Head</p></div><div className="p-2 flex items-center justify-center w-full"><p className="font-zilla text-start w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div> </div></SwiperSlide>
 <SwiperSlide><div className="flex items-center w-full h-full justify-center flex-col bg-white rounded-md border border-gray-500 p-4"><div className="w-full h-full p-2 items-center flex justify-start"><div className="h-full rounded-full p-1 border-2 border-red-600"><img src='https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4' alt="images" className="w-16 h-16 rounded-full"/></div></div><div className="w-full flex justify-between items-center h-full p-2"><h1 className="font-bold font-monts">Yakshit Garg</h1><p className="font-zilla text-base">Web Head</p></div><div className="p-2 flex items-center justify-center w-full"><p className="font-zilla text-start w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div> </div></SwiperSlide>
 <SwiperSlide><div className="flex items-center w-full h-full justify-center flex-col bg-white rounded-md border border-gray-500 p-4"><div className="w-full h-full p-2 items-center flex justify-start"><div className="h-full rounded-full p-1 border-2 border-red-600"><img src='https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4' alt="images" className="w-16 h-16 rounded-full"/></div></div><div className="w-full flex justify-between items-center h-full p-2"><h1 className="font-bold font-monts">Yakshit Garg</h1><p className="font-zilla text-base">Web Head</p></div><div className="p-2 flex items-center justify-center w-full"><p className="font-zilla text-start w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div> </div></SwiperSlide>
 <SwiperSlide><div className="flex items-center w-full h-full justify-center flex-col bg-white rounded-md border border-gray-500 p-4"><div className="w-full h-full p-2 items-center flex justify-start"><div className="h-full rounded-full p-1 border-2 border-red-600"><img src='https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4' alt="images" className="w-16 h-16 rounded-full"/></div></div><div className="w-full flex justify-between items-center h-full p-2"><h1 className="font-bold font-monts">Yakshit Garg</h1><p className="font-zilla text-base">Web Head</p></div><div className="p-2 flex items-center justify-center w-full"><p className="font-zilla text-start w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div> </div></SwiperSlide>
 <SwiperSlide><div className="flex items-center w-full h-full justify-center flex-col bg-white rounded-md border border-gray-500 p-4"><div className="w-full h-full p-2 items-center flex justify-start"><div className="h-full rounded-full p-1 border-2 border-red-600"><img src='https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4' alt="images" className="w-16 h-16 rounded-full"/></div></div><div className="w-full flex justify-between items-center h-full p-2"><h1 className="font-bold font-monts">Yakshit Garg</h1><p className="font-zilla text-base">Web Head</p></div><div className="p-2 flex items-center justify-center w-full"><p className="font-zilla text-start w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div> </div></SwiperSlide>
 <SwiperSlide><div className="flex items-center w-full h-full justify-center flex-col bg-white rounded-md border border-gray-500 p-4"><div className="w-full h-full p-2 items-center flex justify-start"><div className="h-full rounded-full p-1 border-2 border-red-600"><img src='https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4' alt="images" className="w-16 h-16 rounded-full"/></div></div><div className="w-full flex justify-between items-center h-full p-2"><h1 className="font-bold font-monts">Yakshit Garg</h1><p className="font-zilla text-base">Web Head</p></div><div className="p-2 flex items-center justify-center w-full"><p className="font-zilla text-start w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div> </div></SwiperSlide> 
 </Swiper>
</div>
         </div>
       </div>
     </div>
     <div className="flex items-center justify-center absolute top-0 bottom-0 right-0 z-[-1]">
       <img src={vector3} alt="vector color art" className="w-96 h-96 md:w-128 md:h-128" /> 
     </div>
   </section>
 </>
  )
}
