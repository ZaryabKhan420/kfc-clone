import React, { useState, useMemo } from "react";
import { WithAuthProtection, LocationCard } from "../components/index";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StoreLocations = () => {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");

  const pakistanCities = [
    "All",
    "Islamabad",
    "Karachi",
    "Lahore",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Gujrat",
    "Peshawar",
    "Quetta",
    "Sialkot",
    "Gujranwala",
    "Bahawalpur",
    "Mardan",
    "Sukkur",
    "Murree",
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

  const kfcStoresData = [
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

  const deliveryData = [
    {
      id: 1,
      title: "KFC Canal View Branch",
      location: "Lahore",
      image: "kfc-pin.svg",
      openingTime: "10:00 AM",
      closingTime: "11:30 PM",
    },
    {
      id: 2,
      title: "University Road Branch",
      location: "Peshawar",
      image: "kfc-pin.svg",
      openingTime: "9:30 AM",
      closingTime: "11:00 PM",
    },
    {
      id: 3,
      title: "Shah Rukn-e-Alam Branch",
      location: "Multan",
      image: "kfc-pin.svg",
      openingTime: "10:00 AM",
      closingTime: "11:00 PM",
    },
    {
      id: 4,
      title: "Garden Town Branch",
      location: "Lahore",
      image: "kfc-pin.svg",
      openingTime: "10:00 AM",
      closingTime: "12:30 AM",
    },
    {
      id: 5,
      title: "Johar Town Branch",
      location: "Lahore",
      image: "kfc-pin.svg",
      openingTime: "10:30 AM",
      closingTime: "11:30 PM",
    },
    {
      id: 6,
      title: "DHA Phase 6 Branch",
      location: "Karachi",
      image: "kfc-pin.svg",
      openingTime: "11:00 AM",
      closingTime: "12:30 AM",
    },
    {
      id: 7,
      title: "Civic Center Branch",
      location: "Rawalpindi",
      image: "kfc-pin.svg",
      openingTime: "10:00 AM",
      closingTime: "11:00 PM",
    },
    {
      id: 8,
      title: "Blue Area Branch",
      location: "Islamabad",
      image: "kfc-pin.svg",
      openingTime: "10:30 AM",
      closingTime: "11:30 PM",
    },
    {
      id: 9,
      title: "Hyderabad Bypass Branch",
      location: "Hyderabad",
      image: "kfc-pin.svg",
      openingTime: "10:00 AM",
      closingTime: "11:30 PM",
    },
    {
      id: 10,
      title: "Model Town Branch",
      location: "Lahore",
      image: "kfc-pin.svg",
      openingTime: "9:00 AM",
      closingTime: "11:00 PM",
    },
  ];

  const pickupData = [
    {
      id: 1,
      title: "KFC Railway Station Branch",
      location: "Karachi",
      image: "kfc-pin.svg",
      openingTime: "9:00 AM",
      closingTime: "10:30 PM",
    },
    {
      id: 2,
      title: "Fortress Stadium Branch",
      location: "Lahore",
      image: "kfc-pin.svg",
      openingTime: "10:30 AM",
      closingTime: "11:30 PM",
    },
    {
      id: 3,
      title: "Clock Tower Branch",
      location: "Faisalabad",
      image: "kfc-pin.svg",
      openingTime: "11:00 AM",
      closingTime: "12:00 AM",
    },
    {
      id: 4,
      title: "Metroville Branch",
      location: "Karachi",
      image: "kfc-pin.svg",
      openingTime: "10:30 AM",
      closingTime: "10:30 PM",
    },
    {
      id: 5,
      title: "Satellite Town Branch",
      location: "Quetta",
      image: "kfc-pin.svg",
      openingTime: "11:00 AM",
      closingTime: "11:30 PM",
    },
    {
      id: 6,
      title: "Askari 10 Branch",
      location: "Rawalpindi",
      image: "kfc-pin.svg",
      openingTime: "10:00 AM",
      closingTime: "11:00 PM",
    },
    {
      id: 7,
      title: "Saddar Branch",
      location: "Karachi",
      image: "kfc-pin.svg",
      openingTime: "10:00 AM",
      closingTime: "12:00 AM",
    },
    {
      id: 8,
      title: "Soan Gardens Branch",
      location: "Islamabad",
      image: "kfc-pin.svg",
      openingTime: "9:30 AM",
      closingTime: "11:30 PM",
    },
    {
      id: 9,
      title: "Jail Road Branch",
      location: "Lahore",
      image: "kfc-pin.svg",
      openingTime: "10:30 AM",
      closingTime: "11:00 PM",
    },
    {
      id: 10,
      title: "Super Market Branch",
      location: "Islamabad",
      image: "kfc-pin.svg",
      openingTime: "10:00 AM",
      closingTime: "12:00 AM",
    },
  ];

  const filterData = (data) =>
    data.filter(
      (item) =>
        (selectedCity === "All" ||
          item.location.toLowerCase() === selectedCity.toLowerCase()) &&
        item.title.toLowerCase().includes(searchText.toLowerCase())
    );

  const filteredStores = useMemo(
    () => filterData(kfcStoresData),
    [searchText, selectedCity, kfcStoresData]
  );
  const filteredDelivery = useMemo(
    () => filterData(deliveryData),
    [searchText, selectedCity, deliveryData]
  );
  const filteredPickup = useMemo(
    () => filterData(pickupData),
    [searchText, selectedCity, pickupData]
  );

  return (
    <div className="bg-bgLight dark:bg-black mt-16 md:mt-5 lg:mt-8 py-5 min-h-[100vh] flex justify-center items-center">
      <div className="container">
        <div className=" bg-white dark:bg-bgButtonDark p-8 rounded-lg sm:my-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2">
              <div className="flex justify-start items-center gap-2 flex-wrap">
                <button
                  onClick={() => navigate("/")}
                  className="w-7 h-7 rounded-full border-2 border-red flex justify-center items-center hover:text-white hover:bg-red transition-all duration-300 ease-linear"
                >
                  <MdKeyboardArrowLeft size={20} />
                </button>
                <div>
                  <h1 className="text-2xl font-bold">Find a Nearby KFC</h1>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-5 w-full">
                <div className="flex justify-start items-center gap-3 bg-bgButtonLight  dark:bg-black px-4 py-3  w-full">
                  <IoSearchSharp size={25} className="min-w-4 max-w-4" />
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="border-none outline-none bg-transparent"
                  />
                </div>
                <div>
                  <select
                    name="city"
                    id="city"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="bg-bgButtonLight dark:bg-black px-4 py-3 outline-blue-300 cursor-pointer border-none w-full"
                  >
                    {pakistanCities.map((city, index) => (
                      <option value={city} key={index}>
                        {city}
                      </option>
                    ))}
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
                  {filteredStores.map((data) => (
                    <LocationCard
                      key={data.id}
                      title={data.title}
                      location={data.location}
                      image={data.image}
                      openingTime={data.openingTime}
                      closingTime={data.closingTime}
                    />
                  ))}
                </TabsContent>
                <TabsContent
                  value="delivery"
                  className="my-5 p-4 bg-bgButtonLight dark:bg-black h-[23rem] overflow-y-auto"
                >
                  {filteredDelivery.map((data) => (
                    <LocationCard
                      key={data.id}
                      title={data.title}
                      location={data.location}
                      image={data.image}
                      openingTime={data.openingTime}
                      closingTime={data.closingTime}
                    />
                  ))}
                </TabsContent>
                <TabsContent
                  value="pickup"
                  className="my-5 p-4 bg-bgButtonLight dark:bg-black h-[23rem] overflow-y-auto"
                >
                  {filteredPickup.map((data) => (
                    <LocationCard
                      key={data.id}
                      title={data.title}
                      location={data.location}
                      image={data.image}
                      openingTime={data.openingTime}
                      closingTime={data.closingTime}
                    />
                  ))}
                </TabsContent>
              </Tabs>
            </div>
            <div className="w-full lg:col-span-3 min-h-[23rem]">
              <iframe
                className="maps w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.7034406118987!2d74.16412487615372!3d32.640720090938025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f03050c9a9403%3A0x547af0d30e96d8b!2sUniversity%20of%20Gujrat!5e0!3m2!1sen!2s!4v1691825736910!5m2!1sen!2s"
                style={{ border: 0 }}
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
