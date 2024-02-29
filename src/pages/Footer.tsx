"use client"
import React from 'react'
import { navItems } from './Navbar'
import Link from 'next/link'
import { FaFacebook,FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const services=[
    {
      "title":"LANDING PAGE, E-COMMERCE SLOUTIONS"
    },
    {
      "title":"PERSONAL WEBSITES, UI/UX DESIGN"
    },
    {
      "title":"REELS/SHORTS/VIDEO EDITING"
    },
    {
      "title":"DESIGN SERVICE"
    },
  ]
  return (
    // <div className="rounded-t-lg bg-grey-dark">
    //   Footer
    // </div>
    <nav className="custom-shape-divider-top-1707201671 stdPy pb-0">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
      </svg>
      <div className='stdPy flex flex-col bg-[#1f1f1f] px-2 pt-0 md:px-10 lg:px-20'>
        <div className='grid grid-cols-2 md:grid-cols-3'>
          <div className='flex flex-col gap-1'>
            <h1 className='pb-6 font-bold'>Provided Srvices</h1>
            {
              services.map((item,idx)=>(
                <span key={idx} className='text-grey'>{item.title}</span>
              ))
            }
          </div>
          <div className='flex flex-col justify-center text-right md:text-center'>
            {
              navItems.map((item,idx)=>(
                <Link href={item.link} key={idx} className='text-grey hover:text-white'>{item.title}</Link>
              ))
            }
          </div>
          
          <div className='col-span-2 flex flex-col items-center md:col-span-1 md:items-end'>
            <h1 className='pb-6 font-bold'>Follow Us</h1>
            <div className='flex gap-5'>
              <FaFacebook className='cursor-pointer text-4xl text-gray-400 hover:text-white'/>
              <FaInstagram className='cursor-pointer text-4xl text-gray-400 hover:text-white'/>
              <FaTwitter className='cursor-pointer text-4xl text-gray-400 hover:text-white'/>
            </div>
          </div>
        </div>
        <div className='flex justify-center pt-5'>	&#169; 2024 nbtservices.in</div>
      </div>
    </nav>
  )
}

export default Footer