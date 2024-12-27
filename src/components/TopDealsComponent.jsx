import React from "react";
import { Button } from "./ui/button";
const TopDealsComponent = ({ img, title, description, price }) => {
  return (
    <div className="relative w-[17rem] sm:w-[19rem] h-[28rem] bg-white  dark:bg-bgButtonDark rounded-lg p-4 heading flex flex-col justify-between items-start group cursor-pointer">
      <div className="flex justify-center items-center h-[16rem] w-full">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover mt-16 group-hover:scale-105 transition-all duration-300 ease-linear"
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-1">
        <h1 className="text-xl font-bold mt-8">{title}</h1>
        <p>{description}</p>
        <p className="font-bold mt-2">Rs {price}</p>
      </div>
      <div className="absolute top-0 left-[50%] translate-x-[-50%] flex justify-center items-start gap-2">
        <div className="w-4 h-5 bg-red"></div>
        <div className="w-4 h-5 bg-red"></div>
        <div className="w-4 h-5 bg-red"></div>
      </div>
      <Button className="bg-red text-white font-bold absolute bottom-[-4%] left-[50%] translate-x-[-50%]">
        + ADD TO BUCKET
      </Button>
    </div>
  );
};

export default TopDealsComponent;
