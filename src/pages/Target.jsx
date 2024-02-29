import React from "react";

const Target = () => {
  return (
    <div
      className="stdPy relative z-[3] h-fit w-full overflow-x-hidden md:pt-20"
      id="preferedClient"
    >
      <div className="absolute -right-16 hidden aspect-square rounded-full border border-[#2b2b2b] bg-gridBg hover:bg-[#1c1c1c] md:block md:w-[35vw] lg:top-10 lg:w-[20vw]"></div>
      <div className="content relative z-[2] px-2 md:w-full md:px-10 lg:w-10/12 lg:px-20">
        <div className="heading">Our Preferred Clients</div>
        <h1 className="mb-5 text-3xl md:text-5xl lg:text-6xl">
          We cater to <span className="text-blue">2</span> distinct types of
          clients
        </h1>
        <p className="text-gray-300 lg:w-3/4">
          Our Content Services are tailored for aspiring influencers and content
          creators who strive to dominate their niche with top-notch content.
        </p>
      </div>
      <div className="relative z-[2] mx-2 my-5 grid grid-cols-1 gap-5 md:mx-10 md:grid-cols-3 md:gap-12 lg:mx-20">
        <div className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-[#2b2b2b] bg-[#1f1f1f] p-5 py-5 shadow-[0_3px_10px_rgb(255,255,255,0.2)] hover:scale-[1.02] hover:shadow-[0_3px_20px_rgb(255,255,255,0.2)]">
          <span className="text-center text-4xl lg:text-3xl">
            Offline-to-Online Businesses
          </span>
          <span className="text-justify text-gray-400">
            Small to mid-size startups or businesses looking to transition from
            offline to online operations.
          </span>
        </div>
        <div className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-[#2b2b2b] bg-[#1f1f1f] p-5 py-5 shadow-[0_3px_10px_rgb(255,255,255,0.2)] hover:scale-[1.02] hover:shadow-[0_3px_20px_rgb(255,255,255,0.2)]">
          <span className="text-center text-4xl lg:text-3xl">
            Online Businesses Seeking Growth
          </span>
          <span className="text-justify text-gray-400">
            Businesses already operating online but aiming to reach new heights
            of success.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Target;
