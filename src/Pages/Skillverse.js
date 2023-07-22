import React from "react";
import Tilty from "react-tilty";

export default function Skillverse() {
  const teachers = [
    {
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
      name: "Anuj Gupta",
      area: "CAT",
    },
    {
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
      name: "Aman Chugh",
      area: "Equality Club",
    },
    {
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
      name: "Varun Rana",
      area: "Salsa",
    },
    {
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
      name: "Manav Bansal",
      area: "Happiness Course",
    },
    {
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
      name: "Anuj Gupta",
      area: "GRE/GMAT",
    },
    {
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
      name: "Aarti Joshi",
      area: "French",
    },
    {
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
      name: "Paredeep Kumar",
      area: "Yoga",
    },
    {
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
      name: "Divyansh Juneja",
      area: "Work Ready World Ready-I",
    },
    {
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
      name: "Sourav Roy",
      area: "Work Ready World Ready-II",
    },
    {
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
      name: "Nikhil Gupta",
      area: "Entrepreneurial Mindset",
    },
  ];
  return (
    <section className="flex items-center justify-center gap-2 flex-col pt-[6rem]">
      <div className="flex flex-col items-center justify-center  p-4 my-1">
        <h1 className="font-monts font-bold flex items-center justify-center gap-2 text-lg xs:text-xl sm:text-3xl p-1 uppercase select-none cursor-pointer ">
          Stake Holders
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
              </div>
              <div class="flex flex-row items-center justify-center text-[#F6991A] mb-1 gap-[.2rem]">
                {item.area}
              </div>
            </div>
          </Tilty>
        ))}
      </div>
    </section>
  );
}
