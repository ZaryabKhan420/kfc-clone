import React from "react";
import {
  WithAuthProtection,
  HomeCarousal,
  PrimaryHeading,
  CarouselSpacing,
  ScrollAreaComponent,
  BestSellerComponent,
  TopDealsComponent,
} from "../components/index";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const content = [
    {
      id: 1,
      img: "/menu1.png",
      title: "Everyday Value",
      path: "/menu#EverydayValue",
    },
    {
      id: 2,
      img: "/menu2.png",
      title: "Ala-Carte-&-Combos",
      path: "/menu#Ala-Carte-&-Combos",
    },
    {
      id: 3,
      img: "/menu3.png",
      title: "Promotion",
      path: "/menu#Promotion",
    },
    {
      id: 4,
      img: "/menu4.png",
      title: "Signature-Boxes",
      path: "/menu#Signature-Boxes",
    },
    {
      id: 5,
      img: "/menu5.png",
      title: "Sharing",
      path: "/menu#Sharing",
    },
    {
      id: 6,
      img: "/menu6.png",
      title: "Snacks-&-Beverages",
      path: "/menu#Snacks-&-Beverages",
    },
    {
      id: 7,
      img: "/menu7.png",
      title: "Midnight (Start at 12 am)",
      path: "/menu#Midnight (Start at 12 am)",
    },
  ];

  const bestSellerContent = [
    {
      id: 1,
      title: "Krunch Burger",
      img: "/bestSeller1.png",
      price: 310,
    },
    {
      id: 2,
      title: "Krunch Combo",
      img: "/bestSeller2.png",
      price: 590,
    },
    {
      id: 3,
      title: "Chicken & Chips",
      img: "/bestSeller3.png",
      price: 620,
    },
    {
      id: 4,
      title: "Hot Wings Bucket",
      img: "/bestSeller4.png",
      price: 670,
    },
    {
      id: 5,
      title: "Mighty Zinger",
      img: "/bestSeller5.png",
      price: 770,
    },
  ];
  const topDealsContent = [
    {
      id: 1,
      title: "Zinger Stacker Combo",
      img: "/topSeller1.png",
      description: "1 Zinger Stacker + 1 Regular fries + 1 Regular drink",
      price: 950,
    },
    {
      id: 2,
      title: "Crispy Duo Box",
      img: "/topSeller2.png",
      description:
        "Turn up the fun with 5pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks",
      price: 1350,
    },
    {
      id: 2,
      title: "Family Festival 3",
      img: "/topSeller3.png",
      description:
        "An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Hot and Crispy.",
      price: 2590,
    },
  ];

  const endingImage = [
    {
      id: 1,
      img: "/endingImages1.png",
      path: "/menu",
    },
    {
      id: 2,
      img: "/endingImages2.png",
      path: "/menu",
    },
    {
      id: 3,
      img: "/endingImages3.jpg",
      path: "/menu",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="bg-bgLight dark:bg-black mt-16 md:mt-5 lg:mt-8 ">
      <HomeCarousal />
      <div className="container pt-5 pb-2 w-full">
        <Button className="flex justify-center items-center bg-red w-full md:w-[50%] m-auto text-white">
          REORDER
        </Button>
      </div>
      {/* menu  */}
      <div className="container sm:py-5 sm:mt-5">
        <Link
          to={"/menu"}
          className="text-sm font-bold text-right w-full flex justify-end sm:hidden"
        >
          {" "}
          VIEW ALL
        </Link>
        <PrimaryHeading title={"EXPLORE MENU"} />

        {/* Carousal for large devices  */}
        <div className="hidden sm:block">
          <CarouselSpacing />
        </div>

        {/* for mobile devices  */}
        <div className="grid grid-cols-3 sm:hidden gap-2 mt-5">
          <div className="relative border border-dashed border-black dark:border-white col-span-1 rounded-lg p-2 h-68">
            <h1 className="text-xs font-bold">{content[0].title}</h1>
            <div className="absolute inset-0 flex justify-center items-center">
              <img
                src={content[0].img}
                alt={content[0].title}
                loading="lazy"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <div className="relative border border-dashed border-black dark:border-white p-2 rounded-lg h-32 w-full flex flex-col justify-center items-center">
              <h1 className="text-xs font-bold text-left w-full">
                {content[1].title}
              </h1>
              <div className="flex justify-center items-center w-full h-full mt-3">
                <img
                  src={content[1].img}
                  alt={content[1].title}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
            <div className="relative border border-dashed border-black dark:border-white p-2 rounded-lg h-32 w-full flex flex-col justify-center items-center">
              <h1 className="text-xs font-bold text-left w-full">
                {content[2].title}
              </h1>
              <div className="flex justify-center items-center w-full h-full mt-3">
                <img
                  src={content[2].img}
                  alt={content[2].title}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <div className="relative border border-dashed border-black dark:border-white p-2 rounded-lg h-32 w-full flex flex-col justify-center items-center">
              <h1 className="text-xs font-bold text-left w-full">
                {content[3].title}
              </h1>
              <div className="flex justify-center items-center w-full h-full mt-3">
                <img
                  src={content[3].img}
                  alt={content[3].title}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
            <div className="relative border border-dashed border-black dark:border-white p-2 rounded-lg h-32 w-full flex flex-col justify-center items-center">
              <h1 className="text-xs font-bold text-left w-full">
                {content[4].title}
              </h1>
              <div className="flex justify-center items-center w-full h-full mt-3">
                <img
                  src={content[4].img}
                  alt={content[4].title}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Sellers */}
      <div className="container py-5">
        <PrimaryHeading title={"BEST SELLERS"} />
        <div className="mt-5 w-full">
          <ScrollAreaComponent>
            {bestSellerContent.map((data) => (
              <BestSellerComponent
                key={data.id}
                img={data.img}
                title={data.title}
                price={data.price}
              />
            ))}
          </ScrollAreaComponent>
        </div>
      </div>

      {/* Top Deals */}
      <div className="container py-5">
        <PrimaryHeading title={"TOP DEALS"} />
        <div className="mt-5 w-full h-[32rem]">
          <ScrollAreaComponent>
            {topDealsContent.map((data) => (
              <TopDealsComponent
                key={data.id}
                img={data.img}
                title={data.title}
                description={data.description}
                price={data.price}
              />
            ))}
          </ScrollAreaComponent>
        </div>
      </div>

      {/* Ending Images  */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5 pb-16">
          {endingImage.map((value) => {
            return (
              <Link to={"/menu"}>
                <img
                  src={value.img}
                  alt={value.id}
                  loading="lazy"
                  className="rounded-lg"
                />
              </Link>
            );
          })}
          <div className="bg-white dark:bg-cardDark flex flex-col justify-start items-center gap-4 p-4 rounded-lg">
            <img src={"/endingImages4.png"} alt={"kfc"} loading="lazy" />
            <h1 className="text-2xl font-semibold text-center">
              Adding 11 herbs and spices, Explore our menu and add items to your
              cart.
            </h1>
            <Button
              className="bg-red text-white text-xl w-48 h-12"
              onClick={() => navigate("/menu")}
            >
              Explore Menu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithAuthProtection(Home, false);
