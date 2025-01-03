import React from "react";
import { Button } from "./ui/button";
import { BiSolidDirectionRight } from "react-icons/bi";
const PickUpCard = ({
  title,
  description,
  openingTime,
  closingTime,
  location,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div
      className={`p-2  flex flex-col justify-start items-start border-b-2 border-b-gray-500 cursor-pointer ${
        selectedOption === title ? "bg-red" : "bg-white dark:bg-bgButtonDark"
      }`}
      onClick={() => {
        setSelectedOption(title);
      }}
    >
      <h1 className="text-lg font-bold">{title}</h1>
      <p>{description}</p>
      <h1
        className={`${
          selectedOption === title ? "text-white" : "text-red"
        } text-lg font-bold`}
      >
        {openingTime} - {closingTime}
      </h1>
      <Button
        className={`text-sm bg-red text-white ${
          selectedOption === title && "text-black bg-white"
        }`}
      >
        <a href={location} className="text-sm">
          GET DIRECTION
        </a>
        <BiSolidDirectionRight />
      </Button>
    </div>
  );
};

export default PickUpCard;
