import React from "react";
import { useState } from "react";
import { ReferNowButton } from "./ReferModal";

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const navItems = ["Refer", "Benefit", "FAQ's", "Support"];
  return (
    <div className="w-full flex flex-col justify-center items-center px-4">
      {/* Navigation Menu */}
      <div className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl flex items-center justify-center bg-blue-50 rounded-full mt-8 px-6 py-3 text-lg md:text-xl shadow-md">
        <ul className="w-full flex justify-center gap-6 md:gap-12 text-gray-800  relative">
          {navItems.map((item, index) => (
            <li key={index} className="relative">
              <a
                href="#"
                className={`hover:text-blue-600 transition ${
                  activeIndex === index ? "text-blue-600 font-semibold" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {item}
              </a>

              {activeIndex === index && (
                <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Hero Section */}
      <div className="w-full flex justify-center items-center mt-8">
        <div className="
          bg-gradient-to-br from-blue-700 to-teal-400 
          w-full md:w-[85%] flex flex-col md:flex-row items-center justify-center 
          py-12 md:py-16 px-6 md:px-12 
          shadow-lg 
          rounded-none md:rounded-tl-[250px] md:rounded-br-[250px]
        ">
          {/* Left Content */}
          <div className="flex flex-col justify-center gap-6 text-center md:text-left md:w-1/2">
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
              Let's Learn & Earn
            </h1>
            <p className="text-white text-lg md:text-xl leading-relaxed">
              Get a chance to earn <span className="font-bold">₹10,000</span> for every friend who enrolls!
            </p>
            <button className="bg-white text-blue-700 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 w-3/4 md:w-1/2 mx-auto md:mx-0">
            <ReferNowButton />
            </button>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src="./assets/Hero.png"
              alt="Hero-img"
              className="w-[100%] md:w-[350px] lg:w-[400px] drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
