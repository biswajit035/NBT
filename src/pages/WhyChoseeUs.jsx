import React from "react";

const WhyChoseeUs = () => {
  const data = [
    {
      title: "Expertise",
      content:
        "Our team comprises seasoned professionals with diverse backgrounds and expertise in web development, design, and content creation.",
    },
    {
      title: "Client-Centric Approach",
      content:
        "We prioritize your goals and objectives, tailoring our solutions to meet your specific needs and aspirations.",
    },
    {
      title: "Innovation",
      content:
        " We stay ahead of industry trends and embrace emerging technologies to deliver cutting-edge solutions that drive results.",
    },
    {
      title: "Collaboration",
      content:
        " We believe in the power of collaboration and transparency, working closely with you every step of the way to ensure your vision is brought to life.",
    },
  ];
  return (
    <div
      className="stdPy relative z-[3] h-fit w-full overflow-x-hidden md:pt-20"
      id="whychoose"
    >
      <div className="absolute -right-16 hidden aspect-square rounded-full border border-[#2b2b2b] bg-gridBg hover:bg-[#1c1c1c] md:block md:w-[35vw] lg:top-10 lg:w-[20vw]"></div>
      <div className="content relative z-[2] px-2 md:w-full md:px-10 lg:w-10/12 lg:px-20">
        <div className="heading">Why Choose Us</div>
      </div>
      <div className="relative z-[2] mx-2 my-5 grid grid-cols-1 gap-5 md:mx-10 md:grid-cols-1 md:gap-12 lg:mx-20">
        {
            data.map((item,idx)=>(
                        <div className="flex cursor-pointer gap-5 rounded-xl border border-[#2b2b2b] bg-[#1f1f1f] p-5 py-5 hover:scale-[1.02]" key={idx}>
                          <span className="justify-left flex w-1/2 items-center text-center text-2xl lg:text-3xl">
                            {item.title}
                          </span>
                          <span className="w-1/2 text-justify text-gray-400">
                            {item.content}
                          </span>
                        </div>
            ))
        }
      </div>
    </div>
  );
};

export default WhyChoseeUs;
