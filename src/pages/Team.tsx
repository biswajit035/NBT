import Image from 'next/image'
import React from 'react'

const Team = () => {

  const teamData = [
    {
      profilePhoto:"",
      name:"Example Name",
      designation:"Example Designation",
    },
    {
      profilePhoto:"",
      name:"Example Name",
      designation:"Example Designation",
    },
    {
      profilePhoto:"",
      name:"Example Name",
      designation:"Example Designation",
    },
  ]

  return (
    <div className='relative h-fit w-full overflow-x-hidden px-2 py-5 md:px-10 md:pt-20 lg:px-20'>
      <div className='absolute -left-20 top-2 z-[1] hidden aspect-square rounded-full border border-[#2b2b2b] bg-gridBg hover:bg-[#1c1c1c] md:block md:w-[45vw] lg:-left-10 lg:w-[20vw]'></div>
      <div className="relative z-[2]">
        <div className='heading'>Team</div>
        <h1 className='mb-2 text-center text-3xl md:text-5xl lg:text-6xl'>Meet Our </h1>
        <h1 className='mb-8 text-center text-3xl md:text-5xl lg:text-6xl'>Professionals</h1>
      </div>
      <div className='relative z-[3] flex w-full flex-col gap-5 lg:flex-row'>
        {
          teamData.map((item,idx)=>(
            <div className='group flex w-full cursor-pointer flex-col items-center rounded-2xl border border-[#1f1f1f] bg-MainBg-dark hover:border-blue lg:w-1/3' key={idx}>
              <div className='relative aspect-square w-[70%] md:w-[50%] lg:w-[70%]'>
                <Image src="https://framerusercontent.com/images/IonxxVybGJL2ieeXYYjqhCYnoo.png" alt="member pic" fill={true} />
              </div>
              <div className='flex w-full flex-col items-center rounded-b-2xl bg-[#1f1f1f] py-3 group-hover:bg-gridBg-blue'>
                <span className='text-xl'>Name</span>
                <span className='text-sm text-gray-500'>Designation</span>
              </div>
            </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default Team