"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    {
      title: "Home",
      link:"#"
    },
    {
      title: "Services",
      link:"#"
    },
    {
      title: "Reviews",
      link:"#"
    },
    {
      title: "Our Team",
      link:"#"
    },
  ]

  

  return (
    <nav className='flex flex-col gap-3 px-2 py-3 md:px-10 lg:px-20'>
      <div className='flex w-full items-center justify-between'>
        {/* left card */}
        <div className='btnGrid group'>
          <span className='text-lg font-semibold text-grey group-hover:text-grey-dark md:text-xl'>nbt<span className='text-white group-hover:text-black'>Services</span></span>
          <span className='hidden text-xs text-gray-500 group-hover:text-gray-600 md:block'>Next Big Thing Services</span>
        </div>

        {/* pc mode navlink */}
        <div className='hidden gap-9 text-grey lg:flex'>
          {
            navItems.map((item,idx)=>(
              <Link href={item.link} className='hover:text-white' key={idx}>{item.title}</Link>
            ))
          }
        </div>
        {/* right card */}
        <ContactCard/>

        {/* hamburger */}
        <div className='block lg:hidden'>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
      </div>

          {/* mobile mode navlink */}
      {
        isOpen &&
        <div className='w-full rounded-lg border border-blue bg-black bg-doubleCmobile p-8 md:bg-doubleCtablet lg:hidden'>
          <div className='flex flex-col items-center gap-3 text-grey'>
              {
                navItems.map((item, idx) => (
                  <Link href={"#"} className='text-2xl hover:text-white' key={idx}>{item.title}</Link>
                ))
              }
          </div>
          <div className='mx-auto mt-5 flex w-fit cursor-pointer flex-col items-center rounded-lg border border-blue bg-gridBg-blue px-5 py-2 hover:bg-[#2f2f95] hover:shadow-[inset_0px_0px_20px_2px_#4e4ed8] md:text-sm'>Get Now - its free</div>
        </div>}
    </nav>
  )
}

export default Navbar

const ContactCard = () =>{
  return <div className='hidden cursor-pointer flex-col items-center rounded-lg border border-blue bg-gridBg-blue px-5 py-2 hover:bg-[#2f2f95] hover:shadow-[inset_0px_0px_20px_2px_#4e4ed8] md:text-sm lg:flex'>Get Now - its free</div>

}