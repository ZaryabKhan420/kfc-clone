import React from "react";
import { WithAuthProtection } from "../components/index";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const TrackOrder = () => {
  return (
    <div className="bg-bgLight dark:bg-black mt-16 md:mt-5 lg:mt-8 py-5 min-h-[88vh]">
      <div className="container py-12 heading">
        <div className="flex justify-start items-center gap-2">
          <button
            onClick={() => navigate("/")}
            className="w-7 h-7 rounded-full border-2 border-red flex justify-center items-center"
          >
            <MdKeyboardArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-3xl font-bold">Track Order</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithAuthProtection(TrackOrder, false);
