import React from 'react'

const Services = () => {
  const services =
    [
      {
        "title": "Web Services",
        "content":
          [
            {
              "subTitle": "UI/UX Designs",
              "content": "Engaging and intuitive designs crafted to enhance user experiences.",
            },
            {
              "subTitle": "Personal Websites",
              "content": "Tailored websites that reflect your unique identity and goals.",
            },
            {
              "subTitle": "Landing Page Websites",
              "content": "Captivating landing pages designed to drive conversions and engagement.",
            },
            {
              "subTitle": "E-Commerce Websites",
              "content": "Seamless online stores equipped with powerful features to boost sales.",
            },
            {
              "subTitle": "Application Development",
              "content": "Innovative and scalable applications built to meet your specific needs.",
            },
          ]
      },
      {
        "title": "Content Services",
        "content":
          [
            {
              "subTitle": "Reels/Shorts Editing",
              "content": "Dynamic editing solutions to captivate your audience on social media platforms.",
            },
            {
              "subTitle": "Explanation Video Editing",
              "content": "Compelling videos that simplify complex concepts and engage your viewers.",
            },
            {
              "subTitle": "Podcast Editing",
              "content": "Professional editing services to refine your podcasts and elevate your content.",
            },
            {
              "subTitle": "Design Services",
              "content": "From logo design to YouTube thumbnails, we offer a range of design solutions to enhance your brand presence.",
            }
          ]
      },
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
          services.map((item, idx) => (
            <div className='flex flex-col border-b border-white py-4' key={idx}>
              {/* <span className='text-5xl'>{idx < 10 ? `0${idx + 1}` : idx + 1}</span> */}
              <span className='text-2xl'>{item.title}</span>
              <div className="flex flex-col">
                {
                  item.content.map((ci, cidx) => (
                    <li className='text-xl text-gray-300' key={cidx}>{ci.subTitle}</li>
                  ))
                }
              </div>
            </div>
          ))
        }

      </div>

      <div className='flex justify-center gap-10 px-2 pt-14 md:px-10 lg:px-20'>
        <a href="mailto:biswajit.basanti@gmail.com" className="hidden cursor-pointer flex-col items-center rounded-lg border border-blue bg-gridBg-blue px-5 py-2 hover:bg-[#2f2f95] hover:shadow-[inset_0px_0px_20px_2px_#4e4ed8] md:text-sm lg:flex"
        >
          Mail Us
        </a>
        <a
          href="tel://9093879319"
          className="hidden cursor-pointer flex-col items-center rounded-lg border border-blue bg-gridBg-blue px-5 py-2 hover:bg-[#2f2f95] hover:shadow-[inset_0px_0px_20px_2px_#4e4ed8] md:text-sm lg:flex"
        >
          Call us Now
        </a>
      </div>
    </div>
  )
}

export default Services