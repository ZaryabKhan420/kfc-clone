import React from "react";

const HistoryBucket = ({ date, description }) => {
  return (
    <div
      className="flex justify-center items-center
     gap-2 my-5"
    >
      <div className="relative">
        <img
          src="/asset 18.png"
          alt="KFC Bucket"
          loading="lazy"
          className="w-38"
        />
        <div className="absolute top-0 left-0  w-full h-full flex flex-col justify-start items-center gap-2 p-5">
          <h1 className="font-bold text-3xl mt-5">{date}</h1>
          <p className="text-sm text-center">{description}</p>
        </div>
      </div>
      {date !== "Today" && (
        <img
          src="/asset 4.png"
          alt="Arrow"
          loading="lazy"
          className="hidden md:block"
        />
      )}
    </div>
  );
};

export default HistoryBucket;
