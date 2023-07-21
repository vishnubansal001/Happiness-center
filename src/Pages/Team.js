import React from "react";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import Tilty from "react-tilty";
import shivam from "../assets/shivam.jpg";
import vanshika from "../assets/vanshika.jpg";
import yuvika from "../assets/yuvika.jpg";
import himani from "../assets/himani.jpg";
import gunjan from "../assets/gunjan.jpg";
import rashim from "../assets/rashim.jpg";
import ishika from "../assets/ishika.jpg";
import vibhor from "../assets/vibhor.jpg";
import ashima from "../assets/ashima .jpg";
import ayush from "../assets/ayush.jpg";
import sujal from "../assets/sujal.jpg";
import palak from "../assets/palak.jpg";
import sakshi from "../assets/sakshi.jpg";
import khyati from "../assets/khyati.jpg";
import nishtha from "../assets/nishtha.jpg";
import simrit from "../assets/simrit.jpg";
import deepak from "../assets/deepak.jpg";
import muskan from "../assets/muskan.jpg";
import kiranjot from "../assets/kiranjot.jpg";
import divaynshu from "../assets/divaynshu.jpg";
import anmol from "../assets/anmol.jpg";
import natasha from "../assets/natasha.jpg";
import vrinda from "../assets/vrinda.jpg";
import punishtha from "../assets/punishtah.jpg";
import keshav from "../assets/keshav.jpg";
import daksh from "../assets/daksh.jpg";
import ashish from "../assets/ashish.jpg";

export default function Team() {
  const teachers = [
    {
      name: "KiranJot Kaur Mam",
      position: "Happiness Officer",
      linkedin: "",
      insta: "",
      img: kiranjot,
    },
    {
      name: "Shivam Mishra",
      position: "Event Management Head",
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
      img: vrinda,
    },
    {
      name: "Keshav Kumar",
      position: "Core Executive",
      linkedin: "https://www.linkedin.com/in/keshav-kumar-32587725b",
      insta: "https://instagram.com/keshavmahi01?igshid=MjEwN2IyYWYwYw==",
      img: keshav,
    },
    {
      name: "Ashima",
      position: "Core Executive",
      linkedin: "https://www.linkedin.com/in/ashima-garg-351084247",
      insta: "https://instagram.com/real_ashi.16?igshid=NGExMmI2YTkyZg==",
      img: ashima,
    },
    {
      name: "Natasha",
      position: "Core Executive",
      linkedin: "https://www.linkedin.com/in/natasha-1797b7232/",
      insta: "https://instagram.com/natasha25025?igshid=MzNlNGNkZWQ4Mg==",
      img: natasha,
    },
    {
      name: "Ishika",
      position: "Core Executive",
      linkedin: "https://www.linkedin.com/in/ishika-taneja-520799267",
      insta: "https://instagram.com/_ish_3110?igshid=NGExMmI2YTkyZg==",
      img: ishika,
    },
    {
      name: "Rashim Bindal",
      position: "Core Executive",
      linkedin: "https://www.linkedin.com/in/rashim-bindal-697b19271",
      insta:
        "https://www.instagram.com/invites/contact/?i=2kapn81vty6g&utm_content=i6ycil0",
      img: rashim,
    },
    {
      name: "Vibhor Jain",
      position: "Core Executive",
      linkedin: "https://www.linkedin.com/in/ervibhorjain/",
      insta: "https://www.instagram.com/vibhor_jain1008/",
      img: vibhor,
    },
  ];
  const executive = [
    {
      name: "Himani",
      position: "Executive",
      linkedin: "https://www.linkedin.com/in/himani-1254071ba",
      insta: "https://instagram.com/_himani.goyal_?igshid=MzNlNGNkZWQ4Mg==",
      img: himani,
    },
    {
      name: "Sujal Jain",
      position: "Executive",
      linkedin: "https://www.linkedin.com/in/sujal-jain-944717203",
      insta: "https://www.instagram.com/sujal__jain/",
      img: sujal,
    },
    {
      name: "Divyanshu Mehta",
      position: "Executive",
      linkedin: "https://www.linkedin.com/in/divyanshu-mehta-64b617249/",
      insta: "https://instagram.com/divyanshumehta22?igshid=MzNlNGNkZWQ4Mg==",
      img: divaynshu,
    },
    {
      name: "Vanshika Arora",
      position: "Executive",
      linkedin: "https://www.linkedin.com/in/vanshika-arora-67a700247/",
      insta:
        "https://instagram.com/inspirewithvanshika?igshid=MzNlNGNkZWQ4Mg==",
      img: vanshika,
    },
  ];
  const volunteer = [
    {
      name: "Gunjan",
      position: "Volunteer",
      linkedin: "https://www.linkedin.com/in/gunjan-malik-b88288205",
      insta: "https://instagram.com/gunjanmalik16?igshid=MzNlNGNkZWQ4Mg==",
      img: gunjan,
    },
    {
      name: "Palak Gupta",
      position: "Volunteer",
      linkedin: "https://www.linkedin.com/in/palak-gupta-692a99256",
      insta: "https://instagram.com/palakgupta275?igshid=MmIzYWVlNDQ5Yg==",
      img: palak,
    },
    {
      name: "Ayush Gupta",
      position: "Volunteer",
      linkedin: "https://in.linkedin.com/in/ayush-gupta-b6a833261",
      insta: "https://instagram.com/i.ayush.25?igshid=NTc4MTIwNjQ2YQ==",
      img: ayush,
    },
    {
      name: "Muskan",
      position: "Volunteer",
      linkedin: "https://www.linkedin.com/in/muskan-singla-734056270/",
      insta: "https://www.instagram.com/singla_muskan1908/",
      img: muskan,
    },
    {
      name: "Deepak",
      position: "Volunteer",
      linkedin: "https://www.linkedin.com/in/deepak-airan-269036252",
      insta: "https://instagram.com/deepak5775_?igshid=NGExMmI2YTkyZg==",
      img: deepak,
    },
    {
      name: "Khyati Singh",
      position: "Volunteer",
      linkedin: "https://www.linkedin.com/in/khyati-singh-68758a222",
      insta: "",
      img: khyati,
    },
    {
      name: "Yuvika",
      position: "Volunteer",
      linkedin: "",
      insta: "https://www.instagram.com/yuvika_kairpal/",
      img: yuvika,
    },
    {
      name: "Daksh",
      position: "Volunteer",
      linkedin: "",
      insta:
        "https://instagram.com/the_real_artist2004?igshid=MzNlNGNkZWQ4Mg==",
      img: daksh,
    },
    {
      name: "Anmol",
      position: "Volunteer",
      linkedin: "",
      insta:
        "https://instagram.com/anmol_minocha392020?igshid=MzNlNGNkZWQ4Mg==",
      img: anmol,
    },
    {
      name: "Ashish",
      position: "Volunteer",
      linkedin: "",
      insta: "https://instagram.com/ash.ish.19?igshid=NTc4MTIwNjQ2YQ==",
      img: ashish,
    },
  ];
  const members = [
    {
      name: "Nishtha",
      position: "Member",
      linkedin: "https://www.linkedin.com/in/nishtha-dhir-819920258/",
      insta: "https://www.instagram.com/Noble_nicks_/",
      img: nishtha,
    },
    {
      name: "Sakshi garg",
      position: "Member",
      linkedin: "",
      insta: "https://instagram.com/whatshehavee?igshid=MzNlNGNkZWQ4Mg==",
      img: sakshi,
    },
    {
      name: "Simrit Garg ",
      position: "Member",
      linkedin: "https://www.linkedin.com/in/simrit-garg-9a631824b",
      insta: "https://instagram.com/simriiiit?igshid=ZDc4ODBmNjlmNQ==",
      img: simrit,
    },
    {
      name: "Punistha",
      position: "Member",
      linkedin: "https://www.linkedin.com/in/punistha-sachdeva-829603257",
      insta: "https://instagram.com/punistha55?igshid=NGExMmI2YTkyZg==",
      img: punishtha,
    },
  ];
  return (
    <section className="flex items-center justify-center gap-2 flex-col pt-[6rem]">
      <div className="flex flex-col items-center justify-center  p-4 my-1">
        <h1 className="font-monts font-bold flex items-center justify-center gap-2 text-lg xs:text-xl sm:text-4xl p-1 uppercase select-none cursor-pointer ">
          Our Team
        </h1>
      </div>
      <div class="grid w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:px-14 lg:px-12 md:px-10 sm:px-8 px-6  md:py-8 py-6 lg:py-12 auto-rows-fr">
        {teachers.map((item, index) => (
          <Tilty key={index}>
            <div class="w-full pb-4 bg-white rounded-none shadow-lg overflow-hidden flex flex-col justify-center items-center drop-shadow-sm border-[1px] border-[#F6991A]">
              <div class="flex items-center justify-center w-full">
                <img
                  class="h-[300px] w-full object-left"
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
      <div className="flex flex-col items-center justify-center  p-4 my-1">
        <h1 className="font-monts font-bold flex items-center justify-center gap-2 text-lg xs:text-xl sm:text-4xl p-1 uppercase select-none cursor-pointer ">
          Core Executives
        </h1>
      </div>
      <div class="grid w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:px-14 lg:px-12 md:px-10 sm:px-8 px-6  md:py-8 py-6 lg:py-12 auto-rows-fr">
        {coreExecutives.map((item, index) => (
          <Tilty key={index}>
            <div class="w-full pb-4 bg-white rounded-none shadow-lg overflow-hidden flex flex-col justify-center items-center drop-shadow-sm border-[1px] border-[#F6991A]">
              <div class="flex items-center justify-center w-full">
                <img
                  class="h-[300px] w-full object-left"
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
      <div className="flex flex-col items-center justify-center  p-4 my-1">
        <h1 className="font-monts font-bold flex items-center justify-center gap-2 text-lg xs:text-xl sm:text-4xl p-1 uppercase select-none cursor-pointer ">
          Executives
        </h1>
      </div>
      <div class="grid w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:px-14 lg:px-12 md:px-10 sm:px-8 px-6  md:py-8 py-6 lg:py-12 auto-rows-fr">
        {executive.map((item, index) => (
          <Tilty key={index}>
            <div class="w-full pb-4 bg-white rounded-none shadow-lg overflow-hidden flex flex-col justify-center items-center drop-shadow-sm border-[1px] border-[#F6991A]">
              <div class="flex items-center justify-center w-full">
                <img
                  class="h-[300px] w-full object-left"
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
      <div className="flex flex-col items-center justify-center  p-4 my-1">
        <h1 className="font-monts font-bold flex items-center justify-center gap-2 text-lg xs:text-xl sm:text-4xl p-1 uppercase select-none cursor-pointer ">
          Volunteers
        </h1>
      </div>
      <div class="grid w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:px-14 lg:px-12 md:px-10 sm:px-8 px-6  md:py-8 py-6 lg:py-12 auto-rows-fr">
        {volunteer.map((item, index) => (
          <Tilty key={index}>
            <div class="w-full pb-4 bg-white rounded-none shadow-lg overflow-hidden flex flex-col justify-center items-center drop-shadow-sm border-[1px] border-[#F6991A]">
              <div class="flex items-center justify-center w-full">
                <img
                  class="h-[300px] w-full object-left"
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
      <div className="flex flex-col items-center justify-center  p-4 my-1">
        <h1 className="font-monts font-bold flex items-center justify-center gap-2 text-lg xs:text-xl sm:text-4xl p-1 uppercase select-none cursor-pointer ">
          Members
        </h1>
      </div>
      <div class="grid w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:px-14 lg:px-12 md:px-10 sm:px-8 px-6  md:py-8 py-6 lg:py-12 auto-rows-fr">
        {members.map((item, index) => (
          <Tilty key={index}>
            <div class="w-full pb-4 bg-white rounded-none shadow-lg overflow-hidden flex flex-col justify-center items-center drop-shadow-sm border-[1px] border-[#F6991A]">
              <div class="flex items-center justify-center w-full">
                <img
                  class="h-[300px] w-full object-left"
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
