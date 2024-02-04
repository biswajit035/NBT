import Image from 'next/image'
import React from 'react'

const CompanySlider = () => {
  const clientData = [
    {
      Name: "LoremIpsum1",
      img: "1.jpg"
    },
    {
      Name: "LoremIpsum2",
      img: "2.jpg"
    },
    {
      Name: "LoremIpsum3",
      img: "3.jpg"
    },
    {
      Name: "LoremIpsum1",
      img: "1.jpg"
    },
    {
      Name: "LoremIpsum2",
      img: "2.jpg"
    },
    {
      Name: "LoremIpsum3",
      img: "3.jpg"
    },
    {
      Name: "LoremIpsum1",
      img: "1.jpg"
    },
    {
      Name: "LoremIpsum2",
      img: "2.jpg"
    },
    {
      Name: "LoremIpsum3",
      img: "3.jpg"
    },
    {
      Name: "LoremIpsum1",
      img: "1.jpg"
    },
    {
      Name: "LoremIpsum2",
      img: "2.jpg"
    },
    {
      Name: "LoremIpsum3",
      img: "3.jpg"
    },
  ]
  return (
    <div className='no-scrollbar flex h-28 gap-8 overflow-x-scroll px-2 py-8 md:mx-10 lg:mx-20'>
      {
        clientData.map((item,idx)=>{
          return <Card key={idx} name={item?.Name} img={item.img}/>
        })
      }
    </div>
  )
}

export default CompanySlider

export const Card = ({name,img}:{name?:string,img:string}) => {
  return (
    <div className='flex h-full items-center gap-2'>
      <div className='relative aspect-square h-full'>
        <Image src={`/cient/${img}`} alt='client data' fill={true}/>
      </div>
      <span className='text-grey'>{name}</span>
    </div>
  )
}