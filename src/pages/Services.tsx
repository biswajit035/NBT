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
    <div className='relative z-[3] my-12 h-fit w-full overflow-x-hidden'>
      <div className='absolute -left-5 hidden aspect-square rounded-full border border-[#2b2b2b] bg-gridBg hover:bg-[#1c1c1c] md:block md:w-[45vw] lg:w-[20vw]'></div>
      <div className="content relative z-[2] px-2 py-10 md:w-full md:px-10 lg:w-10/12 lg:px-20">
        <div className='mb-10 w-fit rounded-lg bg-[#1f1f1f] px-10 py-1 text-xl'>Our Services</div>
        <h1 className='mb-8 text-3xl md:text-5xl lg:text-6xl'>Who we are and what we offer</h1>
        <p className='text-gray-300 lg:w-3/4'>We’re a team focused on making your startup journey easier. Our services are designed to help you create an impressive MVP quickly and efficiently. Here’s what we offer</p>
      </div>
      <div className='flex flex-col gap-3 px-2 md:px-10 lg:px-20'>
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