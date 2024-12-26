import React from "react";
import { RiYoutubeFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  const pages1 = [
    {
      id: 1,
      title: "About Us",
      path: "/about-us",
    },
    {
      id: 2,
      title: "Mitao Bhook",
      path: "/mitao-bhook",
    },
    {
      id: 3,
      title: "Privacy Policy",
      path: "/privacy-policy",
    },
    {
      id: 4,
      title: "Careers",
      path: "/careers-page",
    },
  ];
  const pages2 = [
    {
      id: 1,
      title: "Contact Us",
      path: "/contact-us",
    },
    {
      id: 2,
      title: "Store Locator",
      path: "/store-locations",
    },
    {
      id: 3,
      title: "Track Order",
      path: "/track-order",
    },
  ];

  const pages3 = [
    {
      id: 3,
      title: "Terms & Conditions",
      path: "/terms-condition",
    },
  ];

  return (
    <div className="py-5 text-textLight dark:text-textDark ">
      <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16">
        <img src={"/Header Logo.png"} alt="KFC" loading="lazy" />
        <div className="flex justify-center items-center gap-4">
          <div className="bg-white flex justify-center items-center rounded-full w-10 h-10">
            <RiYoutubeFill size={25} className="text-red cursor-pointer" />
          </div>
          <div className="bg-white flex justify-center items-center rounded-full w-10 h-10">
            <FaInstagram size={25} className="text-black cursor-pointer" />
          </div>
          <div className="bg-white flex justify-center items-center rounded-full w-10 h-10">
            <FaFacebookF size={20} className="text-blue-700 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 flex-wrap my-6">
        <div className="flex flex-col justify-between items-center gap-4 flex-wrap">
          {pages1.map((page) => {
            return (
              <Link to={page.path} key={page.id} className="text-left w-full">
                {page.title}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col justify-between items-center gap-4 flex-wrap">
          {pages2.map((page) => {
            return (
              <Link to={page.path} key={page.id} className="text-left w-full">
                {page.title}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col justify-between items-center gap-4 flex-wrap">
          {pages3.map((page) => {
            return (
              <Link to={page.path} key={page.id} className="text-left w-full">
                {page.title}
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src={"/download (1).png"} alt="Apple Store" loading="lazy" />
          <img src={"/download (2).png"} alt="Play Store" loading="lazy" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold">2024 KDC. All rights reserved</h1>
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-red font-bold">Powered by</h1>
          <a href="#" className="underline">
            SimpleX Technology solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
