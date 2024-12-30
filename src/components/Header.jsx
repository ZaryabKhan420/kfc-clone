import React, { useEffect, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  const specialPages = [
    {
      id: 1,
      title: "Store Locator",
      path: "/store-locations",
      url: "/Store-Locator.icon.jpg",
    },
    {
      id: 2,
      title: "Track Order",
      path: "/track-order",
      url: "/Tracking-order.icon.jpg",
    },
    {
      id: 3,
      title: "Explore Menu",
      path: "/menu#",
      url: "/Explore-menu.icon.jpg",
    },
  ];

  const pages = [
    { id: 1, title: "About Us", path: "/about-us" },
    { id: 2, title: "Feedback", path: "/feedback" },
    { id: 3, title: "Terms & Conditions", path: "/terms-condition" },
    { id: 4, title: "Privacy Policy", path: "/privacy-policy" },
    { id: 5, title: "Contact Us", path: "/contact-us" },
    { id: 6, title: "Mitao Bhook", path: "/mitao-Bhook" },
    { id: 7, title: "Careers", path: "/careers-page" },
  ];

  useEffect(() => {
    const content = document.documentElement;
    content.classList.remove("light", "dark");
    content.classList.add(theme);
  }, [theme]);

  const handleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = isSidebarOpen ? "auto" : "hidden"; // Disable scroll when sidebar is open
  };

  return (
    <div className="relative">
      <div className="container bg-white dark:bg-black text-textLight dark:text-textDark py-3 md:py-5 lg:py-8 sticky">
        {/* Bucket icon  */}
        <div className="block lg:hidden">
          <button className="absolute mt-12 right-5 md:right-12 cursor-pointer">
            <img
              src="/bucket image.svg"
              alt="bucket"
              loading="lazy"
              className="w-10"
            />
          </button>
        </div>

        {/* Actual Header  */}
        <div className="sticky w-full flex justify-between items-center">
          <div className="flex justify-between items-center gap-3 w-full md:w-fit md:justify-start">
            <button onClick={handleSideBar}>
              <RiMenu2Line className="text-2xl md:text-3xl" />
            </button>
            <Link className="w-16 md:w-20 cursor-pointer" to={"/"}>
              <img
                src="/Header Logo.png"
                alt="KFC"
                loading="lazy"
                className="w-full h-full object-cover cursor-pointer"
              />
            </Link>
          </div>

          <div className="hidden lg:flex justify-start items-center gap-2 ml-5 w-full">
            <Button className="border-2 border-red bg-bgButtonLight dark:bg-bgButtonDark text-textLight dark:text-textDark font-semibold lg:font-bold text-sm flex justify-center items-center gap-1 ">
              <div className="w-6">
                <img
                  src="/Delivery.img.png"
                  alt="Delivery"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              DELIVERY
            </Button>
            <Button className="bg-bgButtonLight dark:bg-bgButtonDark text-textLight dark:text-textDark font-semibold lg:font-bold text-sm flex justify-center items-center gap-1 ">
              <div className="w-6">
                <img
                  src="/pickup.img.png"
                  alt="Pickup"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              PICKUP
            </Button>
          </div>

          <div className="hidden md:flex justify-center items-center gap-2">
            <img
              src="/bucket image.svg"
              alt="bucket"
              loading="lazy"
              className="w-10 hidden lg:block cursor-pointer"
            />
            <Button
              className="bg-red text-textDark"
              onClick={() => navigate("/login")}
            >
              LOGIN
            </Button>
          </div>
        </div>

        {/* Buttons to be shown only on small devices */}
        <div className="flex justify-center items-center lg:hidden gap-2 mt-8 ">
          <Button className="border-2 border-red bg-bgButtonLight dark:bg-bgButtonDark text-textLight dark:text-textDark font-bold text-[11px] sm:text-sm flex justify-center items-center gap-1">
            <div className="w-5">
              <img
                src="/Delivery.img.png"
                alt="Delivery"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            DELIVERY
          </Button>
          <Button className="bg-bgButtonLight dark:bg-bgButtonDark text-textLight dark:text-textDark font-bold text-[11px] sm:text-sm flex justify-center items-center gap-1 ">
            <div className="w-5">
              <img
                src="/pickup.img.png"
                alt="Pickup"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            PICKUP
          </Button>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50"
          onClick={() => {
            setIsSidebarOpen(false);
            document.body.style.overflow = "auto"; // Re-enable scroll when sidebar is closed
          }}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-bgLight dark:bg-bgButtonDark z-40 p-5 flex flex-col justify-start items-start gap-3 transform transition-all duration-300 ease-in-out overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <Button
            className="bg-red text-textDark"
            onClick={() => navigate("/login")}
          >
            LOGIN
          </Button>
        </div>
        <div className="w-full flex justify-end rounded-full">
          <div className="dark:bg-black bg-white rounded-full flex">
            <Button
              onClick={() => {
                setTheme("light"); // Update state directly
              }}
              className={`text-textLight dark:text-white bg-transparent rounded-full border-none outline-none cursor-pointer transition-all duration-200 ${
                theme === "light" ? "bg-red text-white" : ""
              }`}
            >
              Day
            </Button>
            <Button
              onClick={() => {
                setTheme("dark"); // Update state directly
              }}
              className={`text-textLight dark:text-white bg-transparent rounded-full border-none outline-none cursor-pointer transition-all duration-200 ${
                theme === "dark" ? "bg-red text-white" : ""
              }`}
            >
              Night
            </Button>
          </div>
        </div>

        {/* Special Pages */}
        <div className="mt-5 border-t border-black dark:border-[#6B6B6B] flex flex-col justify-start items-start w-full pt-5">
          {specialPages.map((page) => (
            <Link
              key={page.id}
              to={page.path}
              className="w-full flex justify-start items-center gap-4 font-semibold text-md py-3 group hover:bg-[#A3A3A3] px-2"
            >
              <div className="group-hover:translate-x-[-6px] transition-all duration-300 flex justify-start items-center gap-4">
                <img
                  src={page.url}
                  alt={page.title}
                  loading="lazy"
                  className="w-7"
                />
                {page.title}
              </div>
            </Link>
          ))}
        </div>

        {/* Pages */}
        <div className="mt-5 border-t border-black dark:border-[#6B6B6B] flex flex-col justify-start items-start w-full pt-5">
          {pages.map((page) => (
            <Link
              key={page.id}
              to={page.path}
              className="w-full hover:bg-[#A3A3A3] group py-3 px-3 "
            >
              <h1 className="group-hover:translate-x-[-10px] transition-all duration-300">
                {page.title}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
