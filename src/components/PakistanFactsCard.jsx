import React from "react";

const PakistanFactsCard = ({ title, description, img }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 px-12 ">
      <img src={img} alt={title} loading="lazy" />
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
};

export default PakistanFactsCard;
