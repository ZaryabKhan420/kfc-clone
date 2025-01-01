import React from "react";
import { WithAuthProtection } from "../components/index";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdMail } from "react-icons/md";
import { ContactCardOne, ContactCardTwo } from "../components/index";
const Contact = () => {
  const navigate = useNavigate();
  const carOneData = [
    {
      id: 1,
      title1: "Head Office",
      icon1: <FaPhoneAlt className="text-red" />,
      description1: "0213-5877976",
      title2: "Location",
      icon2: <HiLocationMarker className="text-red" />,
      description2:
        "Ocean Tower, 20th Floor, G-3, Block -9, Scheme 5, Main Clifton Road, Karachi, Pakistan",
    },
    {
      id: 2,
      title1: "Regional Office Islamabad",
      icon1: <FaPhoneAlt className="text-red" />,
      description1: "0512726877",
      title2: "Location",
      icon2: <HiLocationMarker className="text-red" />,
      description2:
        "United Bakery Building, 11، School Rd, F-6 Markaz F-6, Islamabad, Islamabad Capital Territory 44000",
    },
    {
      id: 3,
      title1: "Regional Office Lahore",
      icon1: <FaPhoneAlt className="text-red" />,
      description1: "042-35884570",
      title2: "Location",
      icon2: <HiLocationMarker className="text-red" />,
      description2:
        "27-A Ali Block New Garden Town Opposite Barkat Market Lahore",
    },
  ];
  const cardTwoData = [
    {
      id: 1,
      icon: <FaPhoneAlt className="text-red" />,
      title: "Helpline",
      description: "UAN: 111 532 532",
    },
    {
      id: 2,
      icon: <MdMail className="text-red" />,
      title: "Complaints Email",
      description: "customercare@kfcpakistan.com",
    },
  ];
  return (
    <div className="bg-bgLight dark:bg-black mt-16 md:mt-5 lg:mt-8 py-5 min-h-[100vh]">
      <div className="container py-12 heading">
        <div className="flex justify-between items-start flex-wrap">
          <button
            onClick={() => navigate("/")}
            className="w-7 h-7 rounded-full border-2 border-red flex justify-center items-center hover:bg-red transition-all duration-300 ease-linear"
          >
            <MdKeyboardArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-3xl font-bold">Contact Us</h1>
          </div>
          <div className="opacity-0"></div>
        </div>
        <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {carOneData.map((data) => {
            return <ContactCardOne data={data} key={data.id} />;
          })}
        </div>
        <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          {cardTwoData.map((data) => {
            return <ContactCardTwo data={data} key={data.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default WithAuthProtection(Contact, false);
