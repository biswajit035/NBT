import React from 'react'

const Hero = () => {
  return (
    <div className='stdPy relative flex w-full items-center justify-center overflow-x-hidden' id='home'>
      <div className="circle flex w-fit items-center justify-center">
        <div className='hidden aspect-square rounded-full border border-[#2b2b2b] bg-gridBg hover:bg-[#1c1c1c] md:block md:w-[45vw] lg:w-[32vw]'></div>
        <div className='aspect-square w-[115vw] rounded-full border border-[#2b2b2b] bg-[#000000] bg-doubleCmobile md:w-[60vw] lg:w-[40vw]'></div>
        <div className='hidden aspect-square rounded-full border border-[#2b2b2b] bg-gridBg hover:bg-[#1c1c1c] md:block md:w-[45vw] lg:w-[32vw]'></div>
      </div>
      <div className='absolute flex w-9/12 flex-col items-center gap-5 text-white md:w-6/12 lg:w-4/12'>
        <p className='text-center text-xs'>Our purpose is to empower our clients with cutting-edge solutions that propel their businesses forward and amplify their online presence.</p>
        {/* <h1 className='text-center text-4xl'>We are here to transform your crazy ideas into the <span className="bg-gradient-to-r from-white via-sky-600 to-white bg-clip-text font-bold text-transparent">NEXT BIG THING</span></h1> */}
        <h1 className='text-center text-4xl'>We are here to transform your crazy ideas into the <span className="bg-gradient-to-r from-cyan-300 to-purple-800 bg-clip-text font-bold text-transparent">NEXT BIG THING</span></h1>
      </div>
    </div>
  )
}

export default Hero