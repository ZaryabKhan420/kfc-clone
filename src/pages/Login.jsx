import React, { useState, useEffect } from "react";
import { Input, WithAuthProtection, OTP } from "../components/index";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { TbLoader2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
  const schema = z.object({
    firstName: z
      .string()
      .min(1, "First Name is required")
      .max(20, "Must be less than 20 characters"),
    lastName: z
      .string()
      .min(1, "Last Name is required")
      .max(20, "Must be less than 20 characters"),
    emailAddress: z
      .string()
      .email("Invalid Email Address")
      .min(1, "Email Address is required"),
    dateOfBirth: z.string().min(1, "Date of Birth is required"),
    gender: z
      .string()
      .refine((value) => ["male", "female", "others"].includes(value), {
        message: "Please select a valid option",
      }),
  });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: zodResolver(schema), mode: "onChange" });
  const [phoneValue, setPhoneValue] = useState("3");
  const [error, setError] = useState("");
  const [googleLoginLoader, setGoogleLoginLoader] = useState(false);
  const [showOtpPopover, setShowOtpPopover] = useState(false);
  const [showDetailsPopover, setShowDetailsPopover] = useState(false);
  const [timer, setTimer] = useState(90);
  const [timerRunning, setTimerRunning] = useState(false);

  // Start the timer when OTP popover is shown
  useEffect(() => {
    if (showOtpPopover) {
      setTimerRunning(true);
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(interval); // Stop the timer when it reaches 0
            setTimerRunning(false);
            setShowOtpPopover(false);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000); // Update every second

      return () => clearInterval(interval); // Cleanup the interval on component unmount
    }
  }, [showOtpPopover, timerRunning]);

  const handleGoogleLogin = async () => {
    setGoogleLoginLoader(true);

    try {
    } catch (error) {
      console.error("Google Login Error:", error);
    } finally {
      setGoogleLoginLoader(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setShowOtpPopover(true);
    try {
    } catch (error) {
      console.error("Phone Login Error:", error);
    }
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

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const submitDetails = (data) => {
    setShowDetailsPopover(false);
    setShowOtpPopover(false);
    console.log(data);
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
                type="button"
              >
                {googleLoginLoader ? (
                  <TbLoader2 className="animate-spin w-full mx-auto" />
                ) : (
                  <>
                    <FaGoogle />
                    LOGIN WITH GOOGLE
                    <div></div>
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* OTP Popover */}
      {showOtpPopover && (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/50 dark:bg-white/50 flex justify-center items-center overflow-hidden">
          <div className="relative w-[90%] sm:w-[30rem] h-[30rem] rounded-[1rem] bg-white dark:bg-bgButtonDark p-2">
            <div className="absolute top-0 left-[50%] translate-x-[-50%] flex justify-center items-center gap-2">
              <div className="h-5 w-4 bg-red"></div>
              <div className="h-5 w-4 bg-red"></div>
              <div className="h-5 w-4 bg-red"></div>
            </div>
            <div className=" w-full flex justify-between items-center my-3 border-b border-b-gray-200">
              <h1 className="opacity-0">0000000</h1>
              <h1 className="text-xl font-bold mt-5 mb-3 tex-center">
                Add OTP
              </h1>
              <Button
                className="place-self-start bg-red text-white cursor-pointer"
                onClick={() => {
                  setShowOtpPopover(false);
                }} // Close OTP popover
              >
                <IoClose />
              </Button>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="text-sm">
                Please enter the OTP sent to your mobile number.
              </p>
              <OTP />
              <h1 className="text-lg font-bold">{formatTime(timer)}</h1>
              <div className="flex justify-center items-center gap-1">
                <p className="text-sm">Didn't receive OTP?</p>
                <Button className="bg-transparent border-none text-red p-0 text-sm shadow-none">
                  Resend
                </Button>
              </div>
              <Button
                className="bg-red text-white rounded-sm w-full sm:w-[50%]"
                onClick={() => setShowDetailsPopover(true)}
              >
                Verify
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Basic Details Popover */}
      {showDetailsPopover && (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/50 dark:bg-white/50 flex justify-center items-center overflow-hidden">
          <div className="relative w-[90%] sm:w-[30rem] h-[30rem] rounded-[1rem] bg-white dark:bg-bgButtonDark p-5">
            <div className="absolute top-0 left-[50%] translate-x-[-50%] flex justify-center items-center gap-2">
              <div className="h-5 w-4 bg-red"></div>
              <div className="h-5 w-4 bg-red"></div>
              <div className="h-5 w-4 bg-red"></div>
            </div>
            <div className=" w-full flex justify-between items-center my-3 border-b border-b-gray-200">
              <h1 className="opacity-0">0000000</h1>
              <h1 className="text-xl font-bold mt-5 mb-3 tex-center">
                Add Your Details
              </h1>
              <Button
                className="place-self-start bg-red text-white cursor-pointer"
                onClick={() => setShowDetailsPopover(false)}
              >
                <IoClose />
              </Button>
            </div>
            <form
              onSubmit={handleSubmit(submitDetails)}
              className="flex flex-col justify-start items-start gap-3 my-3"
            >
              <div className="grid - grid-cols-2 gap-3 w-full">
                <div>
                  <Input
                    type="text"
                    title="First Name"
                    label="First Name"
                    placeholder=""
                    required={true}
                    {...register("firstName", {
                      required: true,
                    })}
                  />
                  {errors?.firstName && (
                    <p className="text-sm text-red">
                      {errors?.firstName?.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    type="text"
                    title="Last Name"
                    label="Last Name"
                    placeholder=""
                    required={true}
                    {...register("lastName", {
                      required: true,
                    })}
                  />
                  {errors?.lastName && (
                    <p className="text-sm text-red">
                      {errors?.lastName?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full ">
                <Input
                  type="email"
                  title="Email Address"
                  label="Email Address"
                  placeholder=""
                  required={true}
                  {...register("emailAddress", {
                    required: true,
                  })}
                />
                {errors?.emailAddress && (
                  <p className="text-sm text-red">
                    {errors?.emailAddress?.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <Input
                  type="date"
                  title="Date of Birth"
                  label="Date of Birth"
                  placeholder=""
                  required={true}
                  isDateInput={true}
                  {...register("dateOfBirth", {
                    required: true,
                  })}
                />
                {errors?.dateOfBirth && (
                  <p className="text-sm text-red">
                    {errors?.dateOfBirth?.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <h1>Gender</h1>
                <RadioGroup
                  defaultValue="male"
                  className="flex flex-row my-2 justify-start items-center gap-5"
                  {...register("gender")}
                  onValueChange={(value) => {
                    setValue("gender", value);
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="others" id="others" />
                    <Label htmlFor="others">Others</Label>
                  </div>
                  {errors?.gender && (
                    <p className="text-sm text-red">
                      {errors?.gender?.message}
                    </p>
                  )}
                </RadioGroup>
              </div>
              <div className="flex justify-center items-center w-full">
                <Button
                  className="text-white bg-red w-full sm:w-[50%] rounded-sm"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WithAuthProtection(Login, false);
