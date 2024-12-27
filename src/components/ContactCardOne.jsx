import React from "react";

const ContactCardOne = ({ data }) => {
  return (
    <div className="bg-white dark:bg-bgButtonDark rounded-md py-8 px-5 flex flex-col justify-start items-start gap-4">
      <div className="flex flex-col justify-start items-start gap-1">
        <div className="flex justify-start items-center gap-3">
          {data.icon1}
          <h1 className="font-bold text-lg">{data.title1}</h1>
        </div>
        <p className="text-lg">{data.description1}</p>
      </div>
      <div className="flex flex-col justify-start items-start gap-1">
        <div className="flex justify-start items-center gap-3">
          {data.icon2}
          <h1 className="font-bold text-lg">{data.title2}</h1>
        </div>
        <p className="text-lg">{data.description2}</p>
      </div>
    </div>
  );
};

export default ContactCardOne;
