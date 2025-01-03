import React from "react";
import { Input, WithAuthProtection } from "../components/index";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";
const Bucket = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-bgLight dark:bg-black mt-16 md:mt-5 lg:mt-8 py-5 min-h-[100vh]">
      <div className="container py-12 heading">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="col-span-1 lg:col-span-2 rounded-md p-4 bg-white dark:bg-bgButtonDark h-fit">
            <div className="flex justify-start items-center gap-2 border-b border-b-black dark:border-b-white pb-3">
              <button
                onClick={() => navigate("/")}
                className="w-7 h-7 rounded-full border-2 border-red flex justify-center items-center hover:text-white hover:bg-red transition-all duration-300 ease-linear"
              >
                <MdKeyboardArrowLeft size={20} />
              </button>
              <h1 className="text-xl font-bold">Items From Your Cart</h1>
            </div>
            <div className="mt-16 flex flex-col justify-center items-center gap-6">
              <div className="w-64 mx-auto ">
                <img
                  src="/kfc-meal-bucket.png"
                  alt="KFC BUCKET"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-xl font-bold">
                You haven’t added any items in bucket yet
              </h1>
              <Button
                className="bg-red text-white "
                onClick={() => navigate("/menu")}
              >
                EXPLORE MENU
              </Button>
            </div>
          </div>

          <div className="col-span-1 w-full">
            <div className="relative px-2">
              <div className="bg-white/50 dark:bg-bgButtonDark sm:p-4 rounded-md">
                <div className="absolute top-0 right-4 flex justify-center items-center gap-2">
                  <div className="w-4 h-5 bg-red"></div>
                  <div className="w-4 h-5 bg-red"></div>
                  <div className="w-4 h-5 bg-red"></div>
                </div>
                <div className="flex justify-start items-center gap-2 pb-3 border-b-2 border-b-red text-xl font-semibold">
                  <h1>{0}</h1>
                  <h1>Items Added</h1>
                </div>
                <div className="my-5 bg-bgButtonLight dark:bg-black rounded-md sm:p-4 flex flex-col justify-start items-start gap-2">
                  <h1 className="font-bold">Special Instructions (Optional)</h1>
                  <textarea
                    name="special-instructions"
                    id="special-instructions"
                    className="w-full rounded-md h-16 dark:bg-bgButtonDark p-2"
                    placeholder="Add Cooking / Delivery Instructions (Optional)"
                  ></textarea>
                  <Input
                    type="tel"
                    title="Alternate Phone Number (3xxxxxxxxx)"
                    label="Alternate Phone Number (3xxxxxxxxx)"
                    required="false"
                    isPhoneInput="true"
                  />
                </div>
                <div className="my-5 bg-white dark:bg-black rounded-md p-4 flex flex-col justify-start items-center gap-3 h-[20rem]">
                  <h1 className="text-2xl font-bold">Your Order</h1>
                  <div className="flex justify-between items-center w-full">
                    <h2>Sub Total:</h2>
                    <h2>Rs 0</h2>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <h2>Delivery Fee:</h2>
                    <h2>Rs 0</h2>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <h2>GST (NaN %):</h2>
                    <h2>Rs NaN</h2>
                  </div>
                  <div className="w-full h-[2px] bg-black dark:bg-white"></div>
                  <div className="flex justify-between items-center w-full">
                    <h2>Total:</h2>
                    <h2>Rs 0</h2>
                  </div>
                </div>
                <div className="absolute bottom-8 left-0 w-full h-[4rem] bg-red rounded-t-2xl bucket-card">
                  <div className="flex justify-between items-center gap-3 h-full px-4">
                    <div className="flex justify-start items-center gap-2 text-white">
                      <h3 className="text-md">0 Item</h3>
                      <h3 className="text-lg font-bold">
                        <span>|</span> Rs 0
                      </h3>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                      <h1 className="text-xl font-bold text-white">Checkout</h1>
                      <button
                        className="w-8 h-8 rounded-full bg-white flex justify-center items-center"
                        onClick={() => navigate("/bucket")}
                      >
                        <MdKeyboardArrowRight className="text-black text-2xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithAuthProtection(Bucket, false);
