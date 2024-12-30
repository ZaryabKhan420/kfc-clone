import React, { useState } from "react";

const Select = ({ title = "", options = [], required = false }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isActive, setIsActive] = useState(false);

  // Handle selecting an option
  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsActive(false); // Close dropdown after selection
  };

  return (
    <div
      className={`relative w-full p-3 rounded-t-lg bg-[#C2C3C5] dark:bg-bgButtonDark cursor-pointer transition-all duration-200 ease-linear flex justify-between items-center text-textLight dark:text-textDark border border-b-black ${
        isActive && "border-b-red"
      }`}
      onClick={() => setIsActive(true)}
      onBlur={() => setIsActive(false)} // Open dropdown on click
    >
      {/* Heading */}
      <div>
        <label
          className={`block text-md transition-all duration-200 ease-linear ${
            selectedValue || isActive
              ? "text-sm text-black dark:text-white"
              : "text-black dark:text-white"
          }`}
        >
          {title}
          {required && " *"}
        </label>

        {/* Selected Value or Placeholder */}
        <div className="flex justify-between items-center">
          <span
            className={`block text-base mt-1 ${
              selectedValue ? "text-black dark:text-white" : "text-transparent"
            }`}
          >
            {selectedValue}
          </span>
        </div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 ml-2 transition-transform ${
            isActive ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 011.414 1.414l-4 4.5a1 1 0 01-1.414 0l-4-4.5a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Dropdown Options */}
      {isActive && (
        <div className="absolute top-full text-textLight dark:text-textDark left-0 mt-2 w-full p-2 border rounded-md bg-white dark:bg-bgButtonDark shadow-md z-10 max-h-48 overflow-auto">
          {options.map((option, index) => (
            <button
              key={index}
              className="cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-black w-full text-left"
              onClick={() => handleSelect(option)}
              onBlur={() => setIsActive(false)} // Handle option selection
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
