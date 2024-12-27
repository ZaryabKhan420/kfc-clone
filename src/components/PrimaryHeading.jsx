import React from "react";

const PrimaryHeading = ({
  title = "",
  h1Class = "",
  spanClass = "",
  ...props
}) => {
  return (
    <h1
      className={`text-textLight dark:text-textDark relative text-xl md:text-2xl lg:text-3xl font-bold heading w-fit ${h1Class}`}
      {...props}
    >
      {title}
      <span
        className={`absolute top-[100%] left-0 h-[3px] bg-red w-16 ${spanClass}`}
      ></span>
    </h1>
  );
};

export default PrimaryHeading;
