import React from "react";

const LocationCard = ({ title, location, image, openingTime, closingTime }) => {
  return (
    <div className="w-full p-4 rounded-md bg-white dark:bg-bgButtonDark mb-3">
      <div className="flex justify-start items-center gap-5">
        <div className="w-[3rem] h-[3rem]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-bold">{title}</h1>
          <p>{location}</p>
          <h1 className="font-bold text-red">
            {openingTime} - {closingTime}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
