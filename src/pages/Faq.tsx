"use client"
import React from 'react'
import { NextUIProvider } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Faq = () => {

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const faqdata = [
    {
      "question": "test question 1",
      "answer": "lorem 1"
    },
    {
      "question": "test question 2",
      "answer": "lorem 2"
    },
    {
      "question": "test question 3",
      "answer": "lorem 3"
    },
    {
      "question": "test question 4",
      "answer": "lorem 4"
    },
  ]

  return (
    <div className='z-[3] h-fit w-full overflow-x-hidden px-2 py-5 md:px-10 lg:px-20'>

      <div className='mb-10 w-fit rounded-lg bg-[#1f1f1f] px-10 py-1 text-xl'>FAQ</div>
      <h1 className='mb-8 text-3xl md:text-5xl lg:text-6xl'>Questions you may be interested in</h1>
      {/* <p className='text-gray-300 lg:w-3/4'>We provide cutting-edge Framer templates designed specifically for startups and small-medium sized businesses. Our templates are built to enhance user experience and drive conversions.</p> */}
      <NextUIProvider>
        <Accordion variant="splitted">
          {
            faqdata.map((item, idx) => (
              <AccordionItem key={idx} aria-label="Accordion 1" title={<span>{item.question}</span>} className='faqtoogle'>
                {item.answer}
              </AccordionItem>
            ))
          }
        </Accordion>
      </NextUIProvider>
    </div>
  )
}

export default Faq