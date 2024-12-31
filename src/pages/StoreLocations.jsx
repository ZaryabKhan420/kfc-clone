import React from "react";
import { WithAuthProtection } from "../components/index";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StoreLocations = () => {
  const navigate = useNavigate();
  const pakistanCities = [
    "All",
    "Islamabad",
    "Karachi",
    "Lahore",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Peshawar",
    "Quetta",
    "Sialkot",
    "Gujranwala",
    "Bahawalpur",
    "Mardan",
    "Sukkur",
    "Murree",
    "Islamabad",
    "Hyderabad",
    "Sargodha",
    "Abbottabad",
    "Dera Ghazi Khan",
    "Jhelum",
    "Kasur",
    "Mingora",
    "Chiniot",
    "Wazirabad",
    "Kotli",
    "Skardu",
  ];

  const kfcStores = [
    {
      id: 1,
      title: "KFC Store, Defence Road Branch",
      location: "Lahore",
      image: "kfc-pin.svg",
      openingTime: "10:00 AM",
      closingTime: "11:00 PM",
    },
    {
      id: 2,
      title: "Jail Chowk Gujrat Branch",
      location: "Gujrat",
      image: "kfc-pin.svg",
      openingTime: "11:00 AM",
      closingTime: "12:00 AM",
    },
    {
      id: 3,
      title: "Mall Road Branch",
      location: "Lahore",
      image: "kfc-pin.svg",
      openingTime: "10:30 AM",
      closingTime: "10:30 PM",
    },
    {
      id: 4,
      title: "Faisal Town Branch",
      location: "Lahore",
      image: "kfc-pin.svg",
      openingTime: "10:00 AM",
      closingTime: "12:00 AM",
    },
    {
      id: 5,
      title: "Sargodha Road Branch",
      location: "Faisalabad",
      image: "kfc-pin.svg",
      openingTime: "9:30 AM",
      closingTime: "10:30 PM",
    },
    {
      id: 6,
      title: "Tariq Road Branch",
      location: "Karachi",
      image: "kfc-pin.svg",
      openingTime: "10:00 AM",
      closingTime: "11:30 PM",
    },
    {
      id: 7,
      title: "Wapda Town Branch",
      location: "Lahore",
      image: "kfc-pin.svg",
      openingTime: "9:30 AM",
      closingTime: "11:00 PM",
    },
    {
      id: 8,
      title: "I-8 Markaz Branch",
      location: "Islamabad",
      image: "kfc-pin.svg",
      openingTime: "10:00 AM",
      closingTime: "12:00 AM",
    },
    {
      id: 9,
      title: "G-11 Branch",
      location: "Islamabad",
      image: "kfc-pin.svg",
      openingTime: "10:30 AM",
      closingTime: "11:30 PM",
    },
    {
      id: 10,
      title: "Gulshan-e-Iqbal Branch",
      location: "Karachi",
      image: "kfc-pin.svg",
      openingTime: "11:00 AM",
      closingTime: "12:00 AM",
    },
    {
      id: 11,
      title: "Mianwali Road Branch",
      location: "Multan",
      image: "kfc-pin.svg",
      openingTime: "10:00 AM",
      closingTime: "11:00 PM",
    },
    {
      id: 12,
      title: "F-10 Markaz Branch",
      location: "Islamabad",
      image: "kfc-pin.svg",
      openingTime: "10:30 AM",
      closingTime: "10:30 PM",
    },
    {
      id: 13,
      title: "Circular Road Branch",
      location: "Lahore",
      image: "kfc-pin.svg",
      openingTime: "10:00 AM",
      closingTime: "12:00 AM",
    },
    {
      id: 14,
      title: "Jhelum Road Branch",
      location: "Jhelum",
      image: "kfc-pin.svg",
      openingTime: "11:00 AM",
      closingTime: "10:30 PM",
    },
    {
      id: 15,
      title: "Airport Road Branch",
      location: "Lahore",
      image: "kfc-pin.svg",
      openingTime: "9:30 AM",
      closingTime: "11:00 PM",
    },
    {
      id: 16,
      title: "Rawalpindi Branch",
      location: "Rawalpindi",
      image: "kfc-pin.svg",
      openingTime: "10:00 AM",
      closingTime: "12:00 AM",
    },
    {
      id: 17,
      title: "Korangi Branch",
      location: "Karachi",
      image: "kfc-pin.svg",
      openingTime: "10:30 AM",
      closingTime: "10:30 PM",
    },
    {
      id: 18,
      title: "Liberty Market Branch",
      location: "Lahore",
      image: "kfc-pin.svg",
      openingTime: "9:00 AM",
      closingTime: "11:30 PM",
    },
    {
      id: 19,
      title: "Walton Road Branch",
      location: "Lahore",
      image: "kfc-pin.svg",
      openingTime: "10:00 AM",
      closingTime: "11:30 PM",
    },
    {
      id: 20,
      title: "Bahria Town Branch",
      location: "Rawalpindi",
      image: "kfc-pin.svg",
      openingTime: "11:00 AM",
      closingTime: "12:00 AM",
    },
  ];

  return (
    <div className="bg-bgLight dark:bg-black mt-16 md:mt-5 lg:mt-8 py-5 min-h-[100vh] flex justify-center items-center">
      <div className="container">
        <div className=" bg-white dark:bg-bgButtonDark p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-2">
              <div className="flex justify-start items-center gap-2 flex-wrap">
                <button
                  onClick={() => navigate("/")}
                  className="w-7 h-7 rounded-full border-2 border-red flex justify-center items-center hover:bg-red transition-all duration-300 ease-linear"
                >
                  <MdKeyboardArrowLeft size={20} />
                </button>
                <div>
                  <h1 className="text-2xl font-bold">Find a Nearby KFC</h1>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-5 w-full">
                <div className="flex justify-center items-center gap-3 bg-bgButtonLight dark:bg-black px-4 py-3">
                  <IoSearchSharp size={25} />
                  <input
                    type="text"
                    placeholder="Search"
                    className="border-none outline-none bg-transparent"
                  />
                </div>
                <div>
                  <select
                    name="city"
                    id="city"
                    className="bg-bgButtonLight dark:bg-black px-4 py-3 outline-blue-300 cursor-pointer border-none w-full"
                  >
                    {pakistanCities.map((data, index) => {
                      return (
                        <option value={data} key={index}>
                          {data}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <Tabs defaultValue="all">
                <TabsList className="w-full bg-white dark:bg-bgButtonDark">
                  <div className="flex justify-start items-center w-full border-b border-b-black dark:border-b-white py-2">
                    <TabsTrigger value="all" className="text-md">
                      All
                    </TabsTrigger>
                    <TabsTrigger value="delivery" className="text-md">
                      Delivery
                    </TabsTrigger>
                    <TabsTrigger value="pickup" className="text-md">
                      Pickup
                    </TabsTrigger>
                  </div>
                </TabsList>
                <TabsContent
                  value="all"
                  className="my-5 p-4 bg-bgButtonLight dark:bg-black h-[23rem] overflow-y-auto"
                >
                  Make changes to your account here.
                </TabsContent>
                <TabsContent value="delivery">
                  Change your password here.
                </TabsContent>
                <TabsContent value="pickup">
                  Change your password here.
                </TabsContent>
              </Tabs>
            </div>
            <div className="w-full md:col-span-3">
              <iframe
                className="maps w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.7034406118987!2d74.16412487615372!3d32.640720090938025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f03050c9a9403%3A0x547af0d30e96d8b!2sUniversity%20of%20Gujrat!5e0!3m2!1sen!2s!4v1691825736910!5m2!1sen!2s"
                style={{ border: 0 }} // Use object notation here
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithAuthProtection(StoreLocations, false);
