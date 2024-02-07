import React from 'react'

const Services = () => {
  const services = [
    "UI/UX DESIGN",
    "LANDPAGE DESIGN",
    "E-COMMERCE WEBSITE",
    "DIGITAL MARKETING",
    "SEO OPTIMISATION",
  ]
  return (
    <div className='stdPy relative z-[3] h-fit w-full overflow-x-hidden md:pt-20' id='services'>
      <div className='absolute -left-12 top-0 hidden aspect-square rounded-full border border-[#2b2b2b] bg-gridBg hover:bg-[#1c1c1c] md:block md:w-[45vw] lg:-left-16 lg:w-[30vw]'></div>
      <div className="content relative z-[2] px-2 md:w-full md:px-10 lg:w-10/12 lg:px-20">
        <div className='heading'>Our Services</div>
        <h1 className='mb-5 text-3xl md:text-5xl lg:text-6xl'>Who we are and what we offer</h1>
        <p className='text-gray-300 lg:w-3/4'>We’re a team focused on making your startup journey easier. Our services are designed to help you create an impressive MVP quickly and efficiently. Here’s what we offer</p>
      </div>
      <div className='relative z-[2] flex flex-col gap-3 px-2 md:px-10 lg:px-20'>
        {
          services.map((item,idx)=>(
            <div className='flex items-center justify-between border-b border-white py-4' key={idx}>
              <span className='text-5xl'>{idx<10 ? `0${idx+1}` : idx+1}</span>
              <span className='text-2xl'>{item}</span>
            </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default Services