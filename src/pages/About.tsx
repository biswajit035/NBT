import React from 'react'

const About = () => {
  return (
    <div className='stdPy relative z-[3] h-fit w-full overflow-x-hidden md:pt-20' id='about'>
      <div className='absolute -right-16 hidden aspect-square rounded-full border border-[#2b2b2b] bg-gridBg hover:bg-[#1c1c1c] md:block md:w-[35vw] lg:top-10 lg:w-[20vw]'></div>
      <div className="content relative z-[2] px-2 md:w-full md:px-10 lg:w-10/12 lg:px-20">
        <div className='heading'>About Next Big Thing</div>
        <h1 className='mb-5 text-3xl md:text-5xl lg:text-4xl'>Our purpose is to empower our clients with top-notch solutions, for <span className="text-blue">business growth</span> and <span className="text-blue">online impact.</span></h1>
        <p className='text-gray-300 lg:w-3/4'>We are driven by a passion for innovation and a commitment to excellence. Founded with the vision of empowering businesses and creators to reach their full potential, we specialize in converting ideas into impactful realities.</p>
        <p className='mt-2 text-gray-300 lg:w-3/4'>We prioritize honesty, integrity, and innovation in everything we do. Our team of experts is committed to delivering exceptional results that exceed expectations and drive meaningful outcomes for our clients.</p>
      </div>
     
    </div>
  )
}

export default About