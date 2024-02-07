"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

const Testimonial = () => {
  const Testimonials = [
    {
      "imageUrl":"",
      "name": "",
      "desig":"",
      "content":"I've been using TheGrowth for my clients' MVPs, and the feedback has been outstanding. The ease of customization and the modern design aspects save me time and please my clients. It's a win-win! 1 Lorem"
    },
    {
      "imageUrl":"",
      "name": "",
      "desig":"",
      "content":"I've been using TheGrowth for my clients' MVPs, and the feedback has been outstanding. The ease of customization and the modern design aspects save me time and please my clients. It's a win-win! 2 Lorem"
    },
    {
      "imageUrl":"",
      "name": "",
      "desig":"",
      "content":"I've been using TheGrowth for my clients' MVPs, and the feedback has been outstanding. The ease of customization and the modern design aspects save me time and please my clients. It's a win-win! 3 Lorem"
    },
    {
      "imageUrl":"",
      "name": "",
      "desig":"",
      "content":"I've been using TheGrowth for my clients' MVPs, and the feedback has been outstanding. The ease of customization and the modern design aspects save me time and please my clients. It's a win-win! 4 Lorem"
    },
  ]
  return (
    <div className='stdPy relative z-[3] h-fit w-full overflow-x-hidden md:pt-20'>
      <div className='absolute -right-12 hidden aspect-square rounded-full border border-[#2b2b2b] bg-gridBg hover:bg-[#1c1c1c] md:block md:w-[45vw] lg:-right-20 lg:top-10 lg:w-[20vw]'></div>
      <div className="content relative z-[2] px-2 md:w-full md:px-10 lg:w-10/12 lg:px-20">
        <div className='heading'>Testimonials</div>
        <h1 className='mb-8 text-3xl md:text-5xl lg:w-10/12 lg:text-6xl'>See what our users tell about us</h1>
        <p className='mb-5 text-gray-300 lg:w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab itaque esse sunt? Eum ut id qui quasi excepturi delectus non.</p>
      </div>

      <div className='mx-2 h-fit text-black md:mx-10 lg:mx-20'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {
            Testimonials.map((item,idx)=>(
              <SwiperSlide key={idx} >
                <div className='flex h-fit cursor-pointer flex-col gap-3 rounded-lg border border-[#2b2b2b] bg-[#222222] p-3 text-white hover:bg-[#1d1d1d]'>
                  <div className='flex gap-4'>
                      <div className='relative aspect-square h-14 overflow-hidden rounded-full'>
                      <Image src={"https://framerusercontent.com/images/4RKdz6kbdXldnxwtcC7MmitEc.jpg"} fill={true} alt="profile image"/>
                      </div>
                      <div className='flex h-fit flex-col'>
                        <span className='text-xl'>Name</span>
                      <span className='text-left text-base text-grey'>title</span>
                      </div>
                  </div>
                  <div>
                    {item.content}
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      
    </div>
  )
}

export default Testimonial