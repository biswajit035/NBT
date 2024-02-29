"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'
import Image from 'next/image'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)




  return (
    <nav className='stdP flex flex-col gap-3 py-3'>
      <div className='flex w-full items-center justify-between'>
        {/* left card */}
        <Link className='btnGrid group' href={"/"}>
          <Image src={"/NBT.png"} fill alt='logo'/>
        </Link>

        {/* pc mode navlink */}
        <div className='hidden gap-9 text-grey lg:flex'>
          {
            navItems.map((item, idx) => (
              <Link href={item.link} className='hover:text-white' key={idx}>{item.title}</Link>
            ))
          }
        </div>
        {/* right card */}
        <div className='flex gap-3'>
          <a href="mailto:biswajit.basanti@gmail.com" className="hidden cursor-pointer flex-col items-center rounded-lg border border-blue bg-gridBg-blue px-5 py-2 hover:bg-[#2f2f95] hover:shadow-[inset_0px_0px_20px_2px_#4e4ed8] md:text-sm lg:flex"
          >
            Mail Us
          </a>
          <a
            href="tel://7439968060"
            className="hidden cursor-pointer flex-col items-center rounded-lg border border-blue bg-gridBg-blue px-5 py-2 hover:bg-[#2f2f95] hover:shadow-[inset_0px_0px_20px_2px_#4e4ed8] md:text-sm lg:flex"
          >
            Call us Now
          </a>
        </div>

        {/* <ContactCard /> */}

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
                <Link href={item.link} className='text-2xl hover:text-white' key={idx}>{item.title}</Link>
              ))
            }
          </div>
          <a href='mailto:biswajit.basanti@gmail.com' className='mx-auto mt-5 flex w-fit cursor-pointer flex-col items-center rounded-lg border border-blue bg-gridBg-blue px-5 py-2 hover:bg-[#2f2f95] hover:shadow-[inset_0px_0px_20px_2px_#4e4ed8] md:text-sm' >Mail Us</a>
            <a href="tel://7439968060" className='mx-auto mt-5 flex w-fit cursor-pointer flex-col items-center rounded-lg border border-blue bg-gridBg-blue px-5 py-2 hover:bg-[#2f2f95] hover:shadow-[inset_0px_0px_20px_2px_#4e4ed8] md:text-sm'>Call Us Now</a>
        </div>}
    </nav>
  )
}

export default Navbar


export const navItems = [
  {
    title: "Services",
    link: "#services"
  },
  {
    title: "Faq",
    link: "#faq"
  },
  {
    title: "Testimonial",
    link: "#testimonial"
  },
  {
    title: "About",
    link: "#about"
  },
]