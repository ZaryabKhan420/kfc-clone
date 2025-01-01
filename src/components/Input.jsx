import React, { forwardRef, useState, useRef } from "react";

const Input = (
  {
    type = "text",
    placeholder = "",
    required = false,
    title = "",
    className = "",
    label = "",
    isPhoneInput = false,
    isDateInput = false,
    onChange = () => {},
    ...props
  },
  ref
) => {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);

  const handleActivate = () => {
    setIsActive(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <div
      className={`flex flex-col justify-start items-start bg-[#C2C3C5] dark:bg-[#242120] border-b border-b-black dark:border-b-white rounded-t-lg p-3 cursor-pointer w-full h-16 transition-all duration-200 ease-linear ${
        isActive && "border-b-red dark:border-b-red"
      }`}
      onClick={!isActive ? handleActivate : undefined}
      onBlur={() => setIsActive(false)}
    >
      <label
        htmlFor={title}
        className={`text-md font-normal transition-all duration-200 ease-linear flex justify-start items-center gap-1 ${
          isActive && "text-sm"
        } ${isPhoneInput && "text-sm"} ${isDateInput && "text-sm"}  `}
      >
        {label}
        {required === true && <p className="text-red">*</p>}
      </label>
      <div className="flex justify-start items-center gap-2 w-full">
        {isPhoneInput && <h1 className="text-lg font-bold">+92 | </h1>}
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          ref={ref || inputRef}
          onChange={onChange}
          className={`border-none outline-none bg-transparent transition-all duration-200 ease-linear focus:bg-transparent hover:bg-transparent  ${
            isPhoneInput ? "" : "w-full"
          } ${className}`}
          id={title}
          {...props}
        />
      </div>
    </div>
  );
};

export default forwardRef(Input);
