import React from "react";

const Promise = () => {
  return (
    <div
      className="stdPy relative z-[3] h-fit min-h-[70vh] w-full overflow-x-hidden md:pt-20"
      id="about"
    >
      <div className="absolute -right-16 hidden aspect-square rounded-full border border-[#2b2b2b] bg-gridBg hover:bg-[#1c1c1c] md:block md:w-[35vw] lg:top-10 lg:w-[20vw]"></div>
      <div className="content relative z-[2] px-2 md:w-full md:px-10 lg:w-10/12 lg:px-20">
        <div className="heading">Our Promise</div>
        <p className="text-2xl text-gray-300 md:text-3xl lg:w-3/4 lg:text-3xl">
          When you choose <span className="text-blue">Next Big Thing</span>,
          you&apos;re not just partnering with an agency; you&apos;re joining
          forces with a dedicated team committed to your success. Whether
          you&apos;re a startup looking to make your mark or an established
          business seeking growth, we are here to help you navigate the digital
          landscape and unlock new opportunities.
        </p>
      </div>
    </div>
  );
};

export default Promise;
