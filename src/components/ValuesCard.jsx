import React from "react";

const ValuesCard = ({ img, title, description }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-5 my-5">
      <div className="w-full">
        <img src={img} alt={title} loading="lazy" className="w-full" />
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ValuesCard;
