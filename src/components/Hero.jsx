import React from "react";
import "../hero.css";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className=" bg-[#bbbbbb] flex items-center w-[100%] justify-center h-[60%] mt-10 mb-4">
      <div className=" flex ml-20 mr-20 rounded-lg bg-[#CBE3E5]  ">
        <div className="hero-image w-1/2 h-full rounded-tr-lg rounded-br-lg ">
          <img
            src="https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2020/07/iStock-1194709125-1200x675.jpg"
            alt="shopping basket"
            className="w-full h-full object-cover rounded-tl-[10px] rounded-bl-[10px]"
          />
        </div>
        <div className="hero-text px-8 py-16 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-gray-800">
            Shop On The Go !!!
          </h1>
          <Link to="/products">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-red-500 focus:outline-none">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
