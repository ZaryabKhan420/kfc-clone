import React from "react";
import { WithAuthProtection, Input } from "../components/index";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
const TrackOrder = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();
  const navigate = useNavigate();

  const handleTrackOrder = (data) => {
    console.log(data);
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    if (value.length < 10) {
      setError("phone", {
        type: "Length Error",
        message: "Phone Number must be exactly 10 digits",
      });
    }
    if (value.length === 10) {
      clearErrors("phone");
    }
    e.target.value = value;
  };
  return (
    <div className="bg-bgLight dark:bg-black mt-16 md:mt-5 lg:mt-8 py-5 min-h-[100vh]">
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
        <form
          className="bg-white dark:bg-bgButtonDark p-4 rounded-md w-full xl:w-[50%] my-5"
          onSubmit={handleSubmit(handleTrackOrder)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Input
                type="text"
                title="Phone Number (3xxxxxxxxx)"
                label="Phone Number (3xxxxxxxxx)"
                required={true}
                placeholder=""
                isPhoneInput={true}
                {...register("phone", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Phone Number must be exactly 10 digits",
                  },
                  onChange: (e) => {
                    handlePhoneChange(e);
                  },
                })}
              />
              {errors?.phone && (
                <p className="text-red text-sm">{errors.phone.message}</p>
              )}
            </div>
            <Input
              type="text"
              title="Order ID"
              label="Order ID"
              required={true}
              placeholder=""
              {...register("orderId", {
                required: true,
              })}
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <Button
              className="bg-red text-white mt-8 w-full md:w-[50%]"
              type="submit"
            >
              TRACK
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WithAuthProtection(TrackOrder, false);
