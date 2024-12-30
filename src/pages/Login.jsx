import React from "react";
import { Input, WithAuthProtection } from "../components/index";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-bgLight dark:bg-black mt-16 p-5 md:mt-5 lg:mt-8 min-h-[88vh] flex justify-center items-center">
      <div className="container">
        <div className="bg-white rounded-md w-full md:max-w-[80%] px-5 pt-5 pb-5 md:pb-0 mx-auto">
          <button
            onClick={() => navigate("/")}
            className="w-7 h-7 rounded-full border-2 border-red flex justify-center items-center hover:bg-red transition-all duration-300 ease-linear"
          >
            <MdKeyboardArrowLeft size={20} />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-3">
            <div className=" flex justify-center items-center">
              <img src="/login-animation.gif" alt="KFC LOGIN" loading="lazy" />
            </div>
            <div className="flex flex-col justify-start items-start gap-8">
              <h1 className="text-3xl font-bold">Welcome!</h1>
              <Input
                type="tel"
                title="Phone Number (3xxxxxxxxx)"
                label="Phone Number (3xxxxxxxxx)"
                required="false"
                placeholder=""
                isPhoneInput="true"
              />
              <Button
                className="bg-red text-white w-full rounded-md py-6 text-sm"
                disabled="true"
              >
                LOGIN
              </Button>
              <Button className="bg-red text-white w-full py-6 text-sm -my-4 flex justify-between items-center">
                <FaGoogle />
                LOGIN WITH GOOGLE
                <div></div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithAuthProtection(Login, false);
