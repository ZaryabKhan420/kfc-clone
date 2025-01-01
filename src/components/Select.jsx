import React, { useId, useState } from "react";

function Select(
  { options = [], title = "", required = false, className = "", ...props },
  ref
) {
  const id = useId();
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`w-full h-16 rounded-t-lg bg-[#C2C3C5] dark:bg-[#242120] border-b border-b-black dark:border-b-white cursor-pointer ${
        isActive && "border-b-red dark:border-b-red"
      }`}
      onClick={(e) => {
        e.stopPropagation();
        setIsActive(true);
      }}
      onBlur={(e) => {
        e.stopPropagation();
        setIsActive(false);
      }}
    >
      {title && (
        <div className="flex justify-start items-start gap-1 px-3 pt-3">
          <label
            htmlFor={id}
            className={`cursor-pointer text-sm
            }`}
          >
            {title}
          </label>
          {required && <p className="text-sm text-red">*</p>}
        </div>
      )}

      <select
        {...props}
        id={id}
        ref={ref}
        className={`bg-transparent text-black dark:text-white outline-none border-none duration-300  w-full cursor-pointer px-3 ${className}`}
      >
        {options?.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-white dark:bg-bgButtonDark text-black dark:text-white p-3 border-none"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
