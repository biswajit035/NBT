import React from 'react'

const About = () => {
  return (
    <div className='relative z-[3] h-fit w-full overflow-x-hidden py-5'>
      <div className='absolute -right-1 hidden aspect-square rounded-full border border-[#2b2b2b] bg-gridBg hover:bg-[#1c1c1c] md:block md:w-[45vw] lg:w-[20vw]'></div>
      <div className="content relative z-[2] px-2 md:w-full md:px-10 lg:w-10/12 lg:px-20">
        <div className='mb-10 w-fit rounded-lg bg-[#1f1f1f] px-10 py-1 text-xl'>About Us</div>
        <h1 className='mb-8 text-3xl md:text-5xl lg:text-6xl'>We&apos;ve been creating unique and powerful websites for <span className="text-blue">5 years</span></h1>
        <p className='text-gray-300 lg:w-3/4'>We provide cutting-edge Framer templates designed specifically for startups and small-medium sized businesses. Our templates are built to enhance user experience and drive conversions.</p>
      </div>
      <div className='mx-2 my-10 grid grid-cols-1 gap-5 md:mx-10 md:grid-cols-3 md:gap-12 lg:mx-20'>
        <div className='flex cursor-pointer flex-col items-center justify-center rounded-xl border border-[#2b2b2b] bg-[#1f1f1f] py-5 hover:scale-[1.02]'>
          <span className='text-4xl lg:text-6xl'>+100</span>
          <span className='text-gray-400'>Clients</span>
        </div>
        <div className='flex cursor-pointer flex-col items-center justify-center rounded-xl border border-[#2b2b2b] bg-[#1f1f1f] py-5 hover:scale-[1.02]'>
          <span className='text-4xl lg:text-6xl'>+5</span>
          <span className='text-gray-400'>New Templates</span>
        </div>
        <div className='flex cursor-pointer flex-col items-center justify-center rounded-xl border border-[#2b2b2b] bg-[#1f1f1f] py-5 hover:scale-[1.02]'>
          <span className='text-4xl lg:text-6xl'>+38</span>
          <span className='text-gray-400'>New Projects</span>
        </div>
      </div>
    </div>
  )
}

export default About