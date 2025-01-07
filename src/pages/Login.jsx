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
import { sendOtp, verifyOtp } from "../utils/otpService.js";

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
  } = useForm({ resolver: zodResolver(schema), mode: "onChange" });

  const [phoneValue, setPhoneValue] = useState("3");
  const [error, setError] = useState("");
  const [googleLoginLoader, setGoogleLoginLoader] = useState(false);
  const [showOtpPopover, setShowOtpPopover] = useState(false);
  const [showDetailsPopover, setShowDetailsPopover] = useState(false);
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(90);
  const [timerRunning, setTimerRunning] = useState(false);

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

  const handleLogin = async (e) => {
    e.preventDefault();

    // Update the phone value
    const updatedPhone = `+92` + phoneValue;
    try {
      console.log(updatedPhone); // Log the updated phone number
      await sendOtp(updatedPhone); // Call API to send OTP to the user
      setShowOtpPopover(true); // Show OTP popover after OTP is sent
    } catch (error) {
      console.error("Phone Login Error:", error);
    }
  };

  const handleOtpVerification = async () => {
    try {
      const response = await verifyOtp(phoneValue, otp);
      console.log("OTP Verified:", response.message); // Handle success message
      setShowOtpPopover(false); // Hide OTP popover
      setShowDetailsPopover(true); // Show details popover after OTP verification
    } catch (error) {
      console.error("OTP Verification Error:", error);
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
              className="flex flex-col justify-start items-start gap-5 pb-5 sm:pb-0"
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
                className="bg-red text-white w-full rounded-md py-6 text-sm mt-5"
                disabled={phoneValue.length !== 10}
                type="submit"
              >
                LOGIN
              </Button>
              <Button
                className="bg-red text-white w-full rounded-md py-6 text-sm flex justify-between items-center"
                disabled={phoneValue.length !== 10}
                type="submit"
              >
                <FaGoogle />
                LOGIN WITH GOOGLE
                <div className="opacity-0">0000</div>
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
              <h1 className="text-xl font-bold mt-5 mb-3 tex-center">
                Add OTP
              </h1>
              <Button
                className="place-self-start bg-red text-white cursor-pointer"
                onClick={() => setShowOtpPopover(false)} // Close OTP popover
              >
                <IoClose />
              </Button>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="text-sm">
                Please enter the OTP sent to your mobile number.
              </p>
              <OTP value={otp} onChange={(e) => setOtp(e.target.value)} />
              {timerRunning ? (
                <p className="text-sm">{formatTime(timer)}</p>
              ) : (
                <Button onClick={handleOtpVerification}>Verify</Button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Details Popover */}
      {showDetailsPopover && (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/50 dark:bg-white/50 flex justify-center items-center overflow-hidden">
          <div className="relative w-[90%] sm:w-[30rem] h-[30rem] rounded-[1rem] bg-white dark:bg-bgButtonDark p-2">
            <div className="absolute top-0 left-[50%] translate-x-[-50%] flex justify-center items-center gap-2">
              <div className="h-5 w-4 bg-red"></div>
              <div className="h-5 w-4 bg-red"></div>
              <div className="h-5 w-4 bg-red"></div>
            </div>
            <div className=" w-full flex justify-between items-center my-3 border-b border-b-gray-200">
              <h1 className="text-xl font-bold mt-5 mb-3 tex-center">
                Enter Details
              </h1>
              <Button
                className="place-self-start bg-red text-white cursor-pointer"
                onClick={() => setShowDetailsPopover(false)} // Close details popover
              >
                <IoClose />
              </Button>
            </div>
            <form
              className="flex flex-col justify-center items-center gap-4"
              onSubmit={handleSubmit(submitDetails)} // Handle form submission for user details
            >
              {/* Form Fields */}
              <Input
                label="First Name"
                {...register("firstName")}
                error={errors.firstName?.message}
              />
              <Input
                label="Last Name"
                {...register("lastName")}
                error={errors.lastName?.message}
              />
              <Input
                label="Email Address"
                {...register("emailAddress")}
                error={errors.emailAddress?.message}
              />
              <Input
                label="Date of Birth"
                {...register("dateOfBirth")}
                error={errors.dateOfBirth?.message}
              />
              <RadioGroup
                label="Gender"
                {...register("gender")}
                error={errors.gender?.message}
              >
                <RadioGroupItem value="male">Male</RadioGroupItem>
                <RadioGroupItem value="female">Female</RadioGroupItem>
                <RadioGroupItem value="others">Others</RadioGroupItem>
              </RadioGroup>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WithAuthProtection(Login, false);
