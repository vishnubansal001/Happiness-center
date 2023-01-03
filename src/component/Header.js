import React from 'react'
import logo from '../assets/logo.svg'
import logo1 from '../assets/chitkara.png'

export default function Header() {
  return (
    <React.Fragment>     
    <header>
      <div className="w-screen h-full flex items-center justify-around flex-row ">
           <div className='flex items-center justify-center flex-row'>
            <img src={logo} alt="happiness center logo" />    
           </div>
           <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-12 font-monts">
                <div className="flex item-center justify-center">Home</div>
                <div className="flex item-center justify-center">About</div>
                <div className="flex item-center justify-center">Counseling</div>
                <div className="flex item-center justify-center">Events</div>
                <div className="flex item-center justify-center">Our Team</div>
                <div className="flex item-center justify-center">Archive</div>
            </div>
           </div>
           <div className="flex flex-row items-center justify-center gap-6 font-monts">
            <img src={logo1} alt="happiness center logo" />
           </div>
      </div>
    </header>
    </React.Fragment>
  )
}
