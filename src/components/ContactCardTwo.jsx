import React from "react";

const ContactCardTwo = ({ data }) => {
  return (
    <div className="bg-white dark:bg-bgButtonDark rounded-md py-8 px-5 flex flex-col justify-start items-start gap-4">
      <div className="flex flex-col justify-start items-start gap-1">
        <div className="flex justify-start items-center gap-3">
          {data.icon}
          <h1 className="font-bold text-lg">{data.title}</h1>
        </div>
        <p className="text-lg">{data.description}</p>
      </div>
    </div>
  );
};

export default ContactCardTwo;
