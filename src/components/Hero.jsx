import React from "react";
// import "../hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className=" bg-[#bbbbbb] flex items-center justify-center ">
      <div className=" flex flex-col md:flex-row items-center rounded-xl bg-[#CBE3E5] overflow-hidden mt-8 w-[90%] md:w-[80%] lg:w-[70%]">
        <div className="hero-image w-full h-full rounded-tr-lg rounded-br-lg ">
          <img
            src="https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2020/07/iStock-1194709125-1200x675.jpg"
            alt="shopping basket"
            className="w-full h-full rounded-tr-[60px] rounded-br-[60px]"
          />
        </div>
        <div className="hero-text px-8 py-16 flex flex-col items-center justify-center ">
          <h1 className="text-7xl font-bold text-gray-800 font-irishGrover mb-7 ml-7">
            Shop On The Go !!!
          </h1>
          <Link to="/products">
            <button className="bg-green-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-red-500 focus:outline-none">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
