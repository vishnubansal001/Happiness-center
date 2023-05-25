import React from 'react'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import Tilty from 'react-tilty';

export default function Team() {
  const team = [
    {
      name: "Yakshit",
      position: "Position",
      
      linkedin: "",
      insta: "",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Yakshit",
      position: "Position",
      
      linkedin: "",
      insta: "",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Yakshit",
      position: "Position",
      
      linkedin: "",
      insta: "",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Yakshit",
      position: "Position",
      
      linkedin: "",
      insta: "",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Yakshit",
      position: "Position",
      
      linkedin: "",
      insta: "",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Yakshit",
      position: "Position",
      
      linkedin: "",
      insta: "",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Yakshit",
      position: "Position",
      
      linkedin: "",
      insta: "",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Yakshit",
      position: "Position",
      
      linkedin: "",
      insta: "",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Yakshit",
      position: "Position",
      
      linkedin: "",
      insta: "",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Yakshit",
      position: "Position",
      
      linkedin: "",
      insta: "",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Yakshit",
      position: "Position",
      
      linkedin: "",
      insta: "",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Yakshit",
      position: "Position",
      
      linkedin: "",
      insta: "",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Yakshit",
      position: "Position",
      
      linkedin: "",
      insta: "",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Yakshit",
      position: "Position",
      
      linkedin: "",
      insta: "",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Yakshit",
      position: "Position",
      
      linkedin: "",
      insta: "",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Yakshit",
      position: "Position",
      
      linkedin: "",
      insta: "",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
  ];
  return (
    <section className="flex items-center justify-center gap-2 flex-col">
    <div className="w-screen p-1 h-full"><h1 className='font-monts font-bold flex items-center justify-center gap-2 text-4xl p-1 uppercase text-black'>Our<span className="text-[#EF1C22]"> Team.</span></h1></div>
      <div
      class="grid w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:px-14 lg:px-12 md:px-10 sm:px-8 px-6  md:py-8 py-6 lg:py-12 auto-rows-fr"
    >
      {team.map((item,index)=>(
      <Tilty key={index}>
      <div
        class="w-full py-4 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center drop-shadow-sm border-[1px] border-[#F6991A]"
      >
       <div class="flex items-center justify-center rounded-full p-1 border-2 border-red-500">
          <img
            class="rounded-full h-20 w-20 object-left"
            src={item.img}
            alt="photo"
          />
        </div>
        <div class="text-center py-4 gap-2 w-full flex items-center justify-center flex-col">
          <p class="text-xl text-gray-700 font-bold">{item.name}</p>
          <p class="text-base text-gray-500 font-medium">{item.position}</p>
        </div>
        <div
          class="flex flex-row items-center justify-center text-[#F6991A] mb-1 gap-[.2rem]"
        >
          <a
            href={item.linkedin}
            class=""
          >
            <img
              src={linkedin}
              class="h-7"
              alt="linkedin"
            />
          </a>
          <a
            href={item.insta}
            class=""
          >
            <img
              src={instagram}
              class="h-7"
              alt="instagram"
            />
          </a>
        </div>
      </div>
      </Tilty>))}
    </div>
    </section>
  )
}
