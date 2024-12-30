import React from "react";
import { WithAuthProtection, Input } from "../components/index";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
const TrackOrder = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-bgLight dark:bg-black mt-16 md:mt-5 lg:mt-8 py-5 min-h-[88vh]">
      <div className="container py-12 heading">
        <div className="flex justify-start items-center gap-2 flex-wrap">
          <button
            onClick={() => navigate("/")}
            className="w-7 h-7 rounded-full border-2 border-red flex justify-center items-center hover:bg-red transition-all duration-300 ease-linear"
          >
            <MdKeyboardArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-3xl font-bold">Track Order</h1>
          </div>
        </div>
        <div className="bg-white dark:bg-bgButtonDark p-4 rounded-md w-full md:w-[50%] my-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              type="tel"
              title="Phone Number (3xxxxxxxxx)"
              label="Phone Number (3xxxxxxxxx)"
              required="true"
              placeholder=""
              isPhoneInput="tue"
            />
            <Input
              type="text"
              title="Order ID"
              label="Order ID"
              required="true"
              placeholder=""
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <Button className="bg-red text-white mt-8 w-full md:w-[50%]">
              TRACK
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithAuthProtection(TrackOrder, false);
