import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const BestSellerComponent = ({ img, title, price }) => {
  return (
    <div className="relative w-[17rem] sm:w-[19rem] h-[23rem] bg-white  dark:bg-bgButtonDark rounded-md p-4 heading flex flex-col justify-between items-start cursor-pointer">
      <h1 className="text-2xl font-bold mt-8 z-10">{title}</h1>
      <img src={img} alt={title} loading="lazy" className="z-10 static" />
      <div className="absolute top-0 left-[50%] translate-x-[-50%] flex justify-center items-start gap-2">
        <div className="w-4 h-5 bg-red"></div>
        <div className="w-4 h-5 bg-red"></div>
        <div className="w-4 h-5 bg-red"></div>
      </div>
      <div className="absolute top-[25%] right-0 translate-y[-50%] bg-red text-white w-24 h-8 flex justify-center items-center">
        <MdArrowForwardIos className="absolute top-[-100%] left-[-60%] text-white dark:text-bgButtonDark text-[6rem] z-2" />
        <span>Rs</span>
        <h1 className="text-xl font-bold">{price}</h1>
      </div>
    </div>
  );
};

export default BestSellerComponent;
