import React from 'react'
import hero from '../assets/hero.svg'
import arrow from '../assets/arrow.svg'
import library from '../assets/library.svg'
import meditation from '../assets/meditation.svg'
import counseling from '../assets/counseling.svg'
import speaker from '../assets/speaker.svg'



export default function LandingPage(props) {
  return (
    <div className='flex font-monts'>
      <section className='h-full w-screen flex flex-col justify-center gap-4'>
        <div className="flex flex-col-reverse md:flex-row">
         <div className="flex items-center w-full md:w-1/2 justify-center md:justify-start">
            <h1 className="font-extrabold text-xl xs:text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl ml-0 md:ml-6 lg:ml-8 xl:ml-12 p-6 md:p-0 text-center md:text-start">
            There is only one <span className="text-[#F3A140]">passion</span>, the passion for <span className="text-[#EF1C22]">happiness</span>.
            </h1>
         </div>
         <div className="flex items-center justify-center w-full md:w-1/2">
            <img src={hero} alt="herosvg" className="sm:w-[50%] sm:h-[50%] md:w-[100%] md:h-[100%] lg:w-[90%] lg:h-[90%]"/>
         </div>
        </div>
        <div className="flex flex-row items-center justify-center p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-around">
            <div className="grid-cols-1 bg-[#F45B49] w-full h-full">
              <div class="flex flex-col justify-center gap-6 p-4">
              <div className="flex flex-row justify-start items-center">
                <img src={library} alt="arrow next"/>
                </div>
                <h1 className="font-bold">Library</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
                <div className="flex flex-row justify-end items-center">
                     <img src={arrow} alt="arrow next"/>
                </div>
                </div>
            </div>
            <div className="grid-cols-1 bg-[#FCDA69] w-full h-full">
            <div class="flex flex-col justify-center gap-6 p-4">
            <div className="flex flex-row justify-start items-center">
                <img src={meditation} alt="arrow next"/>
                </div>
                <h1 className="font-bold">Meditation</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
                <div className="flex flex-row justify-end items-center">
                     <img src={arrow} alt="arrow next"/>
                </div>
                </div>
            </div>
            <div className="grid-cols-1 bg-[#C6FCDB] w-full h-full">
            <div class="flex flex-col justify-center gap-6 p-4">
            <div className="flex flex-row justify-start items-center">
                <img src={counseling} alt="arrow next"/>
                </div>
                <h1 className="font-bold">Counseling</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
                <div className="flex flex-row justify-end items-center">
                     <img src={arrow} alt="arrow next"/>
                </div>
                </div>
            </div>
            <div className="grid-cols-1 bg-[#FEC2D9] w-full h-full">
            <div class="flex flex-col justify-center gap-6 p-4">
                <div className="flex flex-row justify-start items-center">
                <img src={speaker} alt="arrow next"/>
                </div>
                <h1 className="font-bold">Speaker Session</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
                <div className="flex flex-row justify-end items-center">
                     <img src={arrow} alt="arrow next"/>
                </div>
                </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}
