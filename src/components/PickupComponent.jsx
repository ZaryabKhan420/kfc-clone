import React, { useState, useMemo } from "react";
import { Button } from "./ui/button";
import { IoClose } from "react-icons/io5";
import { PickUpCard } from "./index";
import { setOrderDetails, setOrderType } from "@/features/order/orderSlice.js";
import { useDispatch } from "react-redux";
const PickupComponent = ({ isPickUpOpen, setIsPickUpOpen }) => {
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState({
    value: "",
    name: "",
    location: "",
  });

  const dispatch = useDispatch();

  const places = [
    {
      id: 1,
      title: "Shahbaz",
      description:
        "36, D.H.A Phase 6 Defence Housing Authority, Karachi, Karachi City, Sindh 75500, Pakistan",
      openingTime: "12:00 PM",
      closingTime: "01:00 AM",
      location: "24.8117, 67.0652",
    },
    {
      id: 2,
      title: "Sea View Cafe",
      description: "Clifton Beach, Karachi, Karachi City, Sindh, Pakistan",
      openingTime: "08:00 AM",
      closingTime: "11:00 PM",
      location: "24.8024, 67.0271",
    },
    {
      id: 3,
      title: "Port Grand",
      description: "Near KPT Bridge, Karachi, Karachi City, Sindh, Pakistan",
      openingTime: "04:00 PM",
      closingTime: "12:00 AM",
      location: "24.8500, 66.9989",
    },
    {
      id: 4,
      title: "Dolmen Mall",
      description:
        "Tariq Rd, Block 2 PECHS, Karachi, Karachi City, Sindh, Pakistan",
      openingTime: "11:00 AM",
      closingTime: "10:00 PM",
      location: "24.8757, 67.0540",
    },
    {
      id: 5,
      title: "Movenpick Hotel",
      description:
        "Club Rd, Civil Lines, Karachi, Karachi City, Sindh, Pakistan",
      openingTime: "07:00 AM",
      closingTime: "11:00 PM",
      location: "24.8481, 67.0304",
    },
    {
      id: 6,
      title: "Karachi Zoo",
      description: "Garden East, Karachi, Karachi City, Sindh, Pakistan",
      openingTime: "09:00 AM",
      closingTime: "06:00 PM",
      location: "24.8733, 67.0344",
    },
    {
      id: 7,
      title: "The Grid Station",
      description: "D.H.A Phase 5, Karachi, Karachi City, Sindh, Pakistan",
      openingTime: "01:00 PM",
      closingTime: "11:00 PM",
      location: "24.8138, 67.0481",
    },
    {
      id: 8,
      title: "Chai Shai Cafe",
      description:
        "Block 7 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh, Pakistan",
      openingTime: "05:00 PM",
      closingTime: "02:00 AM",
      location: "24.9202, 67.0914",
    },
    {
      id: 9,
      title: "Super Savari Express",
      description: "Cantt Station, Karachi, Karachi City, Sindh, Pakistan",
      openingTime: "09:00 AM",
      closingTime: "09:00 PM",
      location: "24.8471, 67.0303",
    },
    {
      id: 10,
      title: "Kababjees",
      description: "Do Darya, Phase 8, Karachi, Karachi City, Sindh, Pakistan",
      openingTime: "05:00 PM",
      closingTime: "01:00 AM",
      location: "24.8060, 67.0622",
    },
    {
      id: 11,
      title: "Sardar's Refreshment",
      description: "Burns Road, Karachi, Karachi City, Sindh, Pakistan",
      openingTime: "10:00 AM",
      closingTime: "12:00 AM",
      location: "24.8579, 67.0093",
    },
    {
      id: 12,
      title: "National Museum",
      description:
        "Shahrah-e-Kemal Ata Turk, Karachi, Karachi City, Sindh, Pakistan",
      openingTime: "09:00 AM",
      closingTime: "05:00 PM",
      location: "24.8525, 67.0337",
    },
    {
      id: 13,
      title: "Frere Hall",
      description: "Fatima Jinnah Rd, Karachi, Karachi City, Sindh, Pakistan",
      openingTime: "08:00 AM",
      closingTime: "06:00 PM",
      location: "24.8485, 67.0304",
    },
    {
      id: 14,
      title: "Empress Market",
      description: "Saddar Town, Karachi, Karachi City, Sindh, Pakistan",
      openingTime: "06:00 AM",
      closingTime: "08:00 PM",
      location: "24.8602, 67.0099",
    },
    {
      id: 15,
      title: "Boat Basin",
      description: "Clifton, Karachi, Karachi City, Sindh, Pakistan",
      openingTime: "05:00 PM",
      closingTime: "01:00 AM",
      location: "24.8138, 67.0035",
    },
    {
      id: 16,
      title: "Atrium Mall",
      description: "Shahrah-e-Quaideen, Karachi, Karachi City, Sindh, Pakistan",
      openingTime: "11:00 AM",
      closingTime: "10:00 PM",
      location: "24.8625, 67.0344",
    },
    {
      id: 17,
      title: "PAF Museum",
      description: "Shahrah-e-Faisal, Karachi, Karachi City, Sindh, Pakistan",
      openingTime: "09:00 AM",
      closingTime: "07:00 PM",
      location: "24.8939, 67.0957",
    },
    {
      id: 18,
      title: "Quaid's Mausoleum",
      description: "M.A. Jinnah Rd, Karachi, Karachi City, Sindh, Pakistan",
      openingTime: "09:00 AM",
      closingTime: "06:00 PM",
      location: "24.8732, 67.0457",
    },
    {
      id: 19,
      title: "Kolachi Restaurant",
      description: "Do Darya, Phase 8, Karachi, Karachi City, Sindh, Pakistan",
      openingTime: "06:00 PM",
      closingTime: "01:00 AM",
      location: "24.8060, 67.0622",
    },
    {
      id: 20,
      title: "Urban Forest",
      description: "Clifton, Block 5, Karachi, Karachi City, Sindh, Pakistan",
      openingTime: "10:00 AM",
      closingTime: "09:00 PM",
      location: "24.8138, 67.0283",
    },
  ];

  const filterPlaces = () => {
    if (search === "") {
      return places;
    }
    const newPlaces = places.filter((data) => {
      return data.title.toLowerCase().includes(search.toLowerCase());
    });
    return newPlaces;
  };

  const filteredPlaces = useMemo(() => filterPlaces(), [search]);

  return (
    <div className="container">
      <div className="relative rounded-[1.5rem] p-4 h-[90vh] w-[95vw] sm:w-[30rem] bg-white dark:bg-bgButtonDark z-[999]">
        <div className="absolute top-0 left-[50%] translate-x-[-50%] flex gap-2 ">
          <div className="w-4 h-5 bg-red"></div>
          <div className="w-4 h-5 bg-red"></div>
          <div className="w-4 h-5 bg-red"></div>
        </div>
        <div className=" w-full flex justify-between items-center my-3 border-b border-b-gray-200">
          <h1 className="opacity-0">0000000</h1>
          <h1 className="text-2xl font-bold mt-5 mb-3 tex-center">
            Pickup Your Order
          </h1>
          <Button
            className="place-self-start bg-red text-white cursor-pointer"
            onClick={() => {
              setIsPickUpOpen(false);
              setSelectedOption("");
            }}
          >
            <IoClose />
          </Button>
        </div>
        <div className="h-[70vh] sm:h-[80vh] overflow-y-auto">
          <div>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-2 outline-none border border-gray-200 bg-bgButtonLight dark:bg-bgButtonDark"
            />
            <div className="w-full overflow-y-auto h-[50vh] sm:h-[62vh]">
              {filteredPlaces?.map((data) => {
                return (
                  <PickUpCard
                    key={data.id}
                    title={data.title}
                    description={data.description}
                    openingTime={data.openingTime}
                    closingTime={data.closingTime}
                    location={data.location}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                  />
                );
              })}
            </div>
            <div className="flex justify-center items-center my-5">
              <Button
                className="text-md rounded-sm bg-red text-white"
                disabled={selectedOption.value === ""}
                onClick={() => {
                  setIsPickUpOpen(false);
                  dispatch(setOrderType("pickup"));
                  dispatch(
                    setOrderDetails({
                      name: selectedOption.name,
                      location: selectedOption.location,
                    })
                  );
                  setSearch("");
                  setSelectedOption({ value: "", name: "", location: "" });
                }}
              >
                Start Your Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupComponent;
