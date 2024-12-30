import React from "react";

const KFCSponsoredWork = ({ img, description, id }) => {
  return (
    <div className="bg-white dark:bg-bgButtonDark rounded-md flex flex-col justify-between items-center gap-8 p-8 pb-16">
      <img
        src={img}
        alt="sponsored Work"
        loading="lazy"
        className={`${id === 2 && "w-[20rem]"}`}
      />
      <p className="text-center sm:w-[85%]"> {description}</p>
    </div>
  );
};

export default KFCSponsoredWork;
