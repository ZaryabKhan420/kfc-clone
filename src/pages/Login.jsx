import React, { useState } from "react";
import { Input, WithAuthProtection } from "../components/index";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { useSignIn } from "@clerk/clerk-react";
const Login = () => {
  const navigate = useNavigate();
  const [phoneValue, setPhoneValue] = useState("3");
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {};

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, "");
    if (!value.startsWith("3")) {
      value = "3" + value;
    }
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    setPhoneValue(value);
    if (value.length < 10) {
      setError("Phone number must be exactly 10 digits.");
    } else if (value.length === 10) {
      setError("");
    }
  };

  return (
    <div className="bg-bgLight dark:bg-black mt-16 sm:p-5 md:mt-5 lg:mt-8 min-h-[100vh] flex justify-center items-center">
      <div className="container">
        <div className="bg-white dark:bg-bgButtonDark rounded-md w-full md:max-w-[80%] px-5 pt-5 pb-5 md:pb-0 mx-auto">
          <button
            onClick={() => navigate("/")}
            className="w-7 h-7 rounded-full border-2 border-red flex justify-center items-center hover:text-white hover:bg-red transition-all duration-300 ease-linear"
          >
            <MdKeyboardArrowLeft size={20} />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex justify-center items-center">
              <img src="/login-animation.gif" alt="KFC LOGIN" loading="lazy" />
            </div>
            <form
              className="flex flex-col justify-start items-start gap-8 pb-5 sm:pb-0"
              onSubmit={handleLogin}
            >
              <h1 className="text-3xl font-bold">Welcome!</h1>
              <Input
                type="tel"
                title="phone"
                label="Phone Number (3xxxxxxxxx)"
                required={false}
                isPhoneInput={true}
                // defaultValue={3}
                value={phoneValue}
                onChange={(e) => handleChange(e)}
              />
              {error && <p className="text-red text-sm -my-6">{error}</p>}
              <Button
                className="bg-red text-white w-full rounded-md py-6 text-sm"
                disabled={phoneValue.length !== 10}
                type="submit"
              >
                LOGIN
              </Button>
              <Button
                className="bg-red text-white w-full py-6 text-sm -my-4 flex justify-between items-center"
                onClick={() => handleGoogleLogin()}
              >
                <FaGoogle />
                LOGIN WITH GOOGLE
                <div></div>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithAuthProtection(Login, false);
