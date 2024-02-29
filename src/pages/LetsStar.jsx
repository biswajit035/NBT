import React from "react";

const LetsStart = () => {
  return (
    <div
      className="stdPy relative z-[3] h-fit w-full overflow-x-hidden md:pt-20"
    >
      {/* <div className="absolute -right-16 hidden aspect-square rounded-full border border-[#2b2b2b] bg-gridBg hover:bg-[#1c1c1c] md:block md:w-[35vw] lg:top-10 lg:w-[20vw]"></div> */}
      <div className="content px-2md:px-10 relative z-[2] lg:px-20">
        <div className="heading">Let&apos;s Get Started</div>

        <p className="text-center text-gray-300">
          Ready to take your ideas to the next level? Connect with us today and
          discover how Next Big Thing can help you turn your vision into
          reality.
        </p>
      </div>
      <div className="flex justify-center gap-10 px-2 pt-14 md:px-10 lg:px-20">
        <a href="mailto:biswajit.basanti@gmail.com" className="cursor-pointer flex-col items-center rounded-lg border border-blue bg-gridBg-blue px-5 py-2 text-sm hover:bg-[#2f2f95] hover:shadow-[inset_0px_0px_20px_2px_#4e4ed8] md:text-base md:text-sm lg:flex"
        >
          Mail Us
        </a>
        <a
          href="tel://9093879319"
          className="cursor-pointer flex-col items-center rounded-lg border border-blue bg-gridBg-blue px-5 py-2 text-sm hover:bg-[#2f2f95] hover:shadow-[inset_0px_0px_20px_2px_#4e4ed8] md:text-base md:text-sm lg:flex"
        >
          Call us Now
        </a>
      </div>
    </div>
  );
};

export default LetsStart;
