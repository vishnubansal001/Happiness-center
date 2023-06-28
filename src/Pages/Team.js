import React from "react";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import Tilty from "react-tilty";
import shivam from "../assets/shivam.jpg";

export default function Team() {
  const teachers = [
    {
      name: "KiranJot Kaur Mam",
      position: "Happiness Officer",
      linkedin: "",
      insta: "",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Shivam Mishra",
      position: "Event Manager",
      linkedin: "https://www.linkedin.com/in/shivam-mishra2005",
      insta: "https://instagram.com/shivamkmishra?igshid=NGExMmI2YTkyZg== ",
      img: shivam,
    },
  ];
  const coreExecutives = [
    {
      name: "Vrinda Sharma",
      position: "Core Executive",
      linkedin: "https://www.linkedin.com/in/vrinda-sharma-900a34259/",
      insta: "https://www.instagram.com/sharmavrinda_5122/",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Keshav Kumar",
      position: "Core Executive",
      linkedin: "https://www.linkedin.com/in/keshav-kumar-32587725b",
      insta: "https://instagram.com/keshavmahi01?igshid=MjEwN2IyYWYwYw==",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Ashima",
      position: "Core Executive",
      linkedin: "https://www.linkedin.com/in/ashima-garg-351084247",
      insta: "https://instagram.com/real_ashi.16?igshid=NGExMmI2YTkyZg==",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Natasha",
      position: "Core Executive",
      linkedin: "https://www.linkedin.com/in/natasha-1797b7232/",
      insta: "https://instagram.com/natasha25025?igshid=MzNlNGNkZWQ4Mg==",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Ishika",
      position: "Core Executive",
      linkedin: "https://www.linkedin.com/in/ishika-taneja-520799267",
      insta: "https://instagram.com/_ish_3110?igshid=NGExMmI2YTkyZg==",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Rashim Bindal",
      position: "Core Executive",
      linkedin: "https://www.linkedin.com/in/rashim-bindal-697b19271",
      insta:
        "https://www.instagram.com/invites/contact/?i=2kapn81vty6g&utm_content=i6ycil0",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Vibhor Jain",
      position: "Core Executive",
      linkedin: "https://www.linkedin.com/in/ervibhorjain/",
      insta: "https://www.instagram.com/vibhor_jain1008/",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
  ];
  const executive = [
    {
      name: "Himani",
      position: "Executive",
      linkedin: "https://www.linkedin.com/in/himani-1254071ba",
      insta: "https://instagram.com/_himani.goyal_?igshid=MzNlNGNkZWQ4Mg==",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Sujal Jain",
      position: "Executive",
      linkedin: "https://www.linkedin.com/in/sujal-jain-944717203",
      insta: "https://www.instagram.com/sujal__jain/",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Divyanshu Mehta",
      position: "Executive",
      linkedin: "https://www.linkedin.com/in/divyanshu-mehta-64b617249/",
      insta: "https://instagram.com/divyanshumehta22?igshid=MzNlNGNkZWQ4Mg==",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Vanshika Arora",
      position: "Executive",
      linkedin: "https://www.linkedin.com/in/vanshika-arora-67a700247/",
      insta:
        "https://instagram.com/inspirewithvanshika?igshid=MzNlNGNkZWQ4Mg==",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
  ];
  const volunteer = [
    {
      name: "Gunjan",
      position: "Volunteer",
      linkedin: "https://www.linkedin.com/in/gunjan-malik-b88288205",
      insta: "https://instagram.com/gunjanmalik16?igshid=MzNlNGNkZWQ4Mg==",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Palak Gupta",
      position: "Volunteer",
      linkedin: "https://www.linkedin.com/in/palak-gupta-692a99256",
      insta: "https://instagram.com/palakgupta275?igshid=MmIzYWVlNDQ5Yg==",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Ayush Gupta",
      position: "Volunteer",
      linkedin: "https://in.linkedin.com/in/ayush-gupta-b6a833261",
      insta: "https://instagram.com/i.ayush.25?igshid=NTc4MTIwNjQ2YQ==",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Muskan",
      position: "Volunteer",
      linkedin: "https://www.linkedin.com/in/muskan-singla-734056270/",
      insta: "https://www.instagram.com/singla_muskan1908/",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Deepak",
      position: "Volunteer",
      linkedin: "https://www.linkedin.com/in/deepak-airan-269036252",
      insta: "https://instagram.com/deepak5775_?igshid=NGExMmI2YTkyZg==",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Khyati Singh",
      position: "Volunteer",
      linkedin: "https://www.linkedin.com/in/khyati-singh-68758a222",
      insta: "",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Yuvika",
      position: "Volunteer",
      linkedin: "",
      insta: "https://www.instagram.com/yuvika_kairpal/",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Daksh",
      position: "Volunteer",
      linkedin: "",
      insta:
        "https://instagram.com/the_real_artist2004?igshid=MzNlNGNkZWQ4Mg==",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Anmol",
      position: "Volunteer",
      linkedin: "",
      insta:
        "https://instagram.com/anmol_minocha392020?igshid=MzNlNGNkZWQ4Mg==",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Ashish",
      position: "Volunteer",
      linkedin: "",
      insta: "https://instagram.com/ash.ish.19?igshid=NTc4MTIwNjQ2YQ==",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
  ];
  const members = [
    {
      name: "Nishtha",
      position: "Member",
      linkedin: "https://www.linkedin.com/in/nishtha-dhir-819920258/",
      insta: "https://www.instagram.com/Noble_nicks_/",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Sakshi garg",
      position: "Member",
      linkedin: "",
      insta: "https://instagram.com/whatshehavee?igshid=MzNlNGNkZWQ4Mg==",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Simrit Garg ",
      position: "Member",
      linkedin: "https://www.linkedin.com/in/simrit-garg-9a631824b",
      insta: "https://instagram.com/simriiiit?igshid=ZDc4ODBmNjlmNQ==",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Punistha",
      position: "Member",
      linkedin: "https://www.linkedin.com/in/punistha-sachdeva-829603257",
      insta: "https://instagram.com/punistha55?igshid=NGExMmI2YTkyZg==",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
  ];
  return (
    <section className="flex items-center justify-center gap-2 flex-col">
      <div className="w-screen p-1 h-full">
        <h1 className="font-monts font-bold flex items-center justify-center gap-2 text-4xl p-1 uppercase text-black">
          Our<span className="text-[#EF1C22]"> Team.</span>
        </h1>
      </div>
      <div class="grid w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:px-14 lg:px-12 md:px-10 sm:px-8 px-6  md:py-8 py-6 lg:py-12 auto-rows-fr">
        {teachers.map((item, index) => (
          <Tilty key={index}>
            <div class="w-full py-4 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center drop-shadow-sm border-[1px] border-[#F6991A]">
              <div class="flex items-center justify-center rounded-full p-1 border-2 border-red-500">
                <img
                  class="rounded-full h-20 w-20 object-left"
                  src={item.img}
                  alt="photo"
                />
              </div>
              <div class="text-center py-4 gap-2 w-full flex items-center justify-center flex-col">
                <p class="text-xl text-gray-700 font-bold">{item.name}</p>
                <p class="text-base text-gray-500 font-medium">
                  {item.position}
                </p>
              </div>
              <div class="flex flex-row items-center justify-center text-[#F6991A] mb-1 gap-[.2rem]">
                <a href={item.linkedin} class="">
                  <img src={linkedin} class="h-7" alt="linkedin" />
                </a>
                <a href={item.insta} class="">
                  <img src={instagram} class="h-7" alt="instagram" />
                </a>
              </div>
            </div>
          </Tilty>
        ))}
      </div>
      <div class="grid w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:px-14 lg:px-12 md:px-10 sm:px-8 px-6  md:py-8 py-6 lg:py-12 auto-rows-fr">
        {coreExecutives.map((item, index) => (
          <Tilty key={index}>
            <div class="w-full py-4 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center drop-shadow-sm border-[1px] border-[#F6991A]">
              <div class="flex items-center justify-center rounded-full p-1 border-2 border-red-500">
                <img
                  class="rounded-full h-20 w-20 object-left"
                  src={item.img}
                  alt="photo"
                />
              </div>
              <div class="text-center py-4 gap-2 w-full flex items-center justify-center flex-col">
                <p class="text-xl text-gray-700 font-bold">{item.name}</p>
                <p class="text-base text-gray-500 font-medium">
                  {item.position}
                </p>
              </div>
              <div class="flex flex-row items-center justify-center text-[#F6991A] mb-1 gap-[.2rem]">
                <a href={item.linkedin} class="">
                  <img src={linkedin} class="h-7" alt="linkedin" />
                </a>
                <a href={item.insta} class="">
                  <img src={instagram} class="h-7" alt="instagram" />
                </a>
              </div>
            </div>
          </Tilty>
        ))}
      </div>
      <div class="grid w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:px-14 lg:px-12 md:px-10 sm:px-8 px-6  md:py-8 py-6 lg:py-12 auto-rows-fr">
        {executive.map((item, index) => (
          <Tilty key={index}>
            <div class="w-full py-4 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center drop-shadow-sm border-[1px] border-[#F6991A]">
              <div class="flex items-center justify-center rounded-full p-1 border-2 border-red-500">
                <img
                  class="rounded-full h-20 w-20 object-left"
                  src={item.img}
                  alt="photo"
                />
              </div>
              <div class="text-center py-4 gap-2 w-full flex items-center justify-center flex-col">
                <p class="text-xl text-gray-700 font-bold">{item.name}</p>
                <p class="text-base text-gray-500 font-medium">
                  {item.position}
                </p>
              </div>
              <div class="flex flex-row items-center justify-center text-[#F6991A] mb-1 gap-[.2rem]">
                <a href={item.linkedin} class="">
                  <img src={linkedin} class="h-7" alt="linkedin" />
                </a>
                <a href={item.insta} class="">
                  <img src={instagram} class="h-7" alt="instagram" />
                </a>
              </div>
            </div>
          </Tilty>
        ))}
      </div>
      <div class="grid w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:px-14 lg:px-12 md:px-10 sm:px-8 px-6  md:py-8 py-6 lg:py-12 auto-rows-fr">
        {volunteer.map((item, index) => (
          <Tilty key={index}>
            <div class="w-full py-4 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center drop-shadow-sm border-[1px] border-[#F6991A]">
              <div class="flex items-center justify-center rounded-full p-1 border-2 border-red-500">
                <img
                  class="rounded-full h-20 w-20 object-left"
                  src={item.img}
                  alt="photo"
                />
              </div>
              <div class="text-center py-4 gap-2 w-full flex items-center justify-center flex-col">
                <p class="text-xl text-gray-700 font-bold">{item.name}</p>
                <p class="text-base text-gray-500 font-medium">
                  {item.position}
                </p>
              </div>
              <div class="flex flex-row items-center justify-center text-[#F6991A] mb-1 gap-[.2rem]">
                <a href={item.linkedin} class="">
                  <img src={linkedin} class="h-7" alt="linkedin" />
                </a>
                <a href={item.insta} class="">
                  <img src={instagram} class="h-7" alt="instagram" />
                </a>
              </div>
            </div>
          </Tilty>
        ))}
      </div>
      <div class="grid w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:px-14 lg:px-12 md:px-10 sm:px-8 px-6  md:py-8 py-6 lg:py-12 auto-rows-fr">
        {members.map((item, index) => (
          <Tilty key={index}>
            <div class="w-full py-4 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center drop-shadow-sm border-[1px] border-[#F6991A]">
              <div class="flex items-center justify-center rounded-full p-1 border-2 border-red-500">
                <img
                  class="rounded-full h-20 w-20 object-left"
                  src={item.img}
                  alt="photo"
                />
              </div>
              <div class="text-center py-4 gap-2 w-full flex items-center justify-center flex-col">
                <p class="text-xl text-gray-700 font-bold">{item.name}</p>
                <p class="text-base text-gray-500 font-medium">
                  {item.position}
                </p>
              </div>
              <div class="flex flex-row items-center justify-center text-[#F6991A] mb-1 gap-[.2rem]">
                <a href={item.linkedin} class="">
                  <img src={linkedin} class="h-7" alt="linkedin" />
                </a>
                <a href={item.insta} class="">
                  <img src={instagram} class="h-7" alt="instagram" />
                </a>
              </div>
            </div>
          </Tilty>
        ))}
      </div>
    </section>
  );
}
