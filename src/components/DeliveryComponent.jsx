import React, { useState, useMemo, useEffect } from "react";
import { Button } from "./ui/button";
import { IoClose } from "react-icons/io5";
import { setOrderType, setOrderDetails } from "@/features/order/orderSlice.js";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Checkbox } from "./ui/checkbox";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../components/index";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const DeliveryComponent = ({ isDeliveryOpen, setIsDeliveryOpen }) => {
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [confirmedLocation, setConfirmedLocation] = useState("");
  const [saveAddress, setSaveAddress] = useState({
    selection: false,
  });

  const dispatch = useDispatch();
  const schema = z.object({
    house: z.string().min(1, "This field is required"),
    block: z.string().min(1, "This field is required"),
    mainArea: z.string().min(1, "This field is required"),
    addressType: z.string().min(1, "This field is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const submitDetails = (data) => {
    console.log(data);
    dispatch(setOrderType("delivery"));
    dispatch(
      setOrderDetails({
        name: `${data.house} / ${data.block} / ${data.mainArea} / ${data.addressType} / ${confirmedLocation}`,
        location: "",
      })
    );
    setIsDeliveryOpen(false);
    setSelectedOption("");
    setConfirmedLocation("");
    reset();
  };

  const places = [
    "Sector C Commercial, Bahria Town, Lahore",
    "Block D, Model Town, Lahore",
    "Block C1, Wapda Town, Lahore",
    "Johar Town Phase 2, Lahore",
    "Block A, DHA Phase 6, Lahore",
    "Shadman 1, Lahore",
    "Gulberg 3, Lahore",
    "Samanabad, Lahore",
    "Mall Road, Lahore",
    "Faisal Town, Lahore",
    "Block A, Valencia Town, Lahore",
    "Iqbal Town, Lahore",
    "Block M, Gulberg 2, Lahore",
    "Garden Town, Lahore",
    "Eden City, Lahore",
    "Block F, DHA Phase 5, Lahore",
    "Block B, Lake City, Lahore",
    "Canal View, Lahore",
    "Block G, Johar Town, Lahore",
    "Block R, DHA Phase 8, Lahore",
  ];

  const filterPlaces = () => {
    const newPlaces = places.filter((data) => {
      return data.toLowerCase().includes(search.toLowerCase());
    });
    return newPlaces;
  };

  const filteredPlaces = useMemo(() => filterPlaces(), [search]);

  return (
    <div className="container">
      <form
        className="relative rounded-[1.5rem] p-4 h-[90vh] w-[95vw] sm:w-[30rem] bg-white dark:bg-bgButtonDark z-[999]"
        onSubmit={handleSubmit(submitDetails)}
      >
        <div className="absolute top-0 left-[50%] translate-x-[-50%] flex gap-2 ">
          <div className="w-4 h-5 bg-red"></div>
          <div className="w-4 h-5 bg-red"></div>
          <div className="w-4 h-5 bg-red"></div>
        </div>
        <div className=" w-full flex justify-between items-center my-3 border-b border-b-gray-200">
          <h1 className="opacity-0">0000000</h1>
          <h1 className="text-2xl font-bold mt-5 mb-3 tex-center">
            Select Your Location For Delivery
          </h1>
          <Button
            className="place-self-start bg-red text-white cursor-pointer"
            onClick={() => {
              setIsDeliveryOpen(false);
              setSelectedOption("");
            }}
          >
            <IoClose />
          </Button>
        </div>
        <div className="h-[60vh] sm:h-[70vh] lg:h-[75vh] overflow-y-auto">
          <div>
            <div className="border border-black dark:border-white p-3 rounded-xl">
              <div className="relative bg-red">
                <iframe
                  className="maps w-full h-[30vh] sm:h-[50vh]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.7034406118987!2d74.16412487615372!3d32.640720090938025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f03050c9a9403%3A0x547af0d30e96d8b!2sUniversity%20of%20Gujrat!5e0!3m2!1sen!2s!4v1691825736910!5m2!1sen!2s"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="flex justify-between items-center gap-2 absolute top-2 left-[50%] translate-x-[-50%] w-[95%] h-12 px-3 rounded-lg outline-none bg-bgButtonLight dark:bg-bgButtonDark group border-2 border-transparent focus-within:border-red z-10">
                  <input
                    type="text"
                    placeholder="Enter Your Address"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border-none outline-none w-full bg-transparent"
                  />
                  <IoIosSearch className="text-current group-focus-within:text-red" />
                </div>
                {search !== "" && (
                  <div className="absolute top-[calc(2rem+8px+16px)] left-[50%] translate-x-[-50%] w-[95%] bg-white dark:bg-black shadow-lg z-20 overflow-y-auto max-h-[20vh] sm:max-h-[50vh]">
                    {filteredPlaces.map((data, index) => (
                      <button
                        key={index}
                        className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 w-full text-start border-b border-b-gray-700"
                        onClick={() => {
                          setSelectedOption(data);
                          setSearch("");
                        }}
                      >
                        {data}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-start items-center gap-5 my-3">
              <img
                src="/location-icon.png"
                alt="Location"
                loading="lazy"
                className="w-[1.5rem]"
              />
              {selectedOption ? (
                <h1 className="sm:text-xl">{selectedOption}</h1>
              ) : (
                <h1 className="sm:text-xl">
                  Kindly enable your location or use Search Location
                </h1>
              )}
            </div>
            {confirmedLocation ? (
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="w-full">
                  <Input
                    type="text"
                    label="House"
                    title="House"
                    placeholder=""
                    required={true}
                    {...register("house")}
                  />
                  {errors?.house && (
                    <p className="text-sm text-red">{errors?.house?.message}</p>
                  )}
                </div>
                <div className="w-full">
                  <Input
                    type="text"
                    label="Block"
                    title="Block"
                    placeholder=""
                    required={true}
                    {...register("block")}
                  />
                  {errors?.block && (
                    <p className="text-sm text-red">{errors?.block?.message}</p>
                  )}
                </div>

                <div className="w-full">
                  <Input
                    type="text"
                    label="MainArea"
                    title="MainArea"
                    placeholder=""
                    required={true}
                    {...register("mainArea")}
                  />
                  {errors?.mainArea && (
                    <p className="text-sm text-red">
                      {errors?.mainArea?.message}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <Button
                className="bg-red rounded-sm text-white w-full text-md"
                disabled={!selectedOption}
                onClick={() => setConfirmedLocation(selectedOption)}
              >
                Confirm Location
              </Button>
            )}
          </div>
          {saveAddress.selection === true && (
            <RadioGroup
              defaultValue="home"
              className="my-5 flex justify-center items-center gap-3 flex-wrap"
              {...register("addressType")}
              onValueChange={(value) => {
                setValue("addressType", value);
              }}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="home" id="home" />
                <Label htmlFor="home">HOME</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="office" id="office" />
                <Label htmlFor="office">OFFICE</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="others" id="others" />
                <Label htmlFor="others">OTHERS</Label>
              </div>
            </RadioGroup>
          )}
          <div className="flex justify-start items-center gap-2 my-2">
            <Checkbox
              onCheckedChange={() => {
                setSaveAddress((oldValue) => ({
                  ...oldValue,
                  selection: !oldValue.selection,
                }));
              }}
            />
            <h1>Save Address</h1>
          </div>
          {selectedOption && (
            <Button
              className="bg-red text-white text-md my-3 w-full rounded-sm"
              disabled={!isValid}
              type="submit"
            >
              Start Your Order
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default DeliveryComponent;
