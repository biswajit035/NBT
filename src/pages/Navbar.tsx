"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='relative flex items-center justify-between py-3'>
      <div className='btnGrid group'>
        <span className='text-lg font-semibold text-grey group-hover:text-grey-dark md:text-xl'>nbt<span className='text-white group-hover:text-black'>Services</span></span>
        <span className='hidden text-xs text-gray-500 group-hover:text-gray-600 md:block'>Next Big Thing Services</span>
      </div>
      <>
        <div className='hidden gap-9 text-grey lg:flex'>
          <Link href={"#"} className='hover:text-white'>Home</Link>
          <Link href={"#"} className='hover:text-white'>Services</Link>
          <Link href={"#"} className='hover:text-white'>Reviews</Link>
          <Link href={"#"} className='hover:text-white'>Our Team</Link>
        </div>
        <div className='hidden cursor-pointer flex-col items-center rounded-lg border border-blue bg-gridBg-blue px-5 py-2 hover:bg-[#2f2f95] hover:shadow-[inset_0px_0px_20px_2px_#4e4ed8] md:text-sm lg:flex'>Get Now - its free</div>
      </>

     {
     isOpen && 
        <div className='absolute top-[100%] w-full rounded-lg border border-blue bg-doubleCmobile p-8 md:bg-doubleCtablet lg:hidden'>
        <div className='flex flex-col items-center gap-3 text-grey'>
          <Link href={"#"} className='text-2xl hover:text-white'>Home</Link>
          <Link href={"#"} className='text-2xl hover:text-white'>Services</Link>
          <Link href={"#"} className='text-2xl hover:text-white'>Reviews</Link>
          <Link href={"#"} className='text-2xl hover:text-white'>Our Team</Link>
        </div>
        <div className='mx-auto mt-5 flex w-fit cursor-pointer flex-col items-center rounded-lg border border-blue bg-gridBg-blue px-5 py-2 hover:bg-[#2f2f95] hover:shadow-[inset_0px_0px_20px_2px_#4e4ed8] md:text-sm'>Get Now - its free</div>
      </div>}

      <div className='block lg:hidden'>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
    </nav>
  )
}

export default Navbar

// bg-gridBgBlue