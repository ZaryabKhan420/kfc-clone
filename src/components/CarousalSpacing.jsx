import * as React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PrimaryHeading } from ".";

export function CarouselSpacing() {
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

  return (
    <Carousel className="w-full pt-12 mb-5">
      <CarouselContent className="-ml-1">
        {content.map((data, index) => (
          <CarouselItem
            key={data.id}
            className="px-6 md:basis-1/3 lg:basis-1/4 xl:basis-1/5  hover:translate-y-[-10px] transition-all duration-300 ease-linear py-5"
          >
            <Link
              to={"/menu"}
              className="relative bg-white dark:bg-bgButtonDark rounded-tl-full rounded-tr-full rounded-bl-full cursor-pointer"
            >
              <div
                className={`w-60 h-56  flex flex-col justify-start items-center overflow-hidden m-auto bg-white dark:bg-bgButtonDark rounded-tl-full rounded-tr-full rounded-bl-full cursor-pointer`}
              >
                <img
                  src={data.img}
                  alt={data.title}
                  loading="lazy"
                  className={`max-w-[80%] max-h-[90%] ${
                    data.id === 2 && "absolute top-[-22%]"
                  }`}
                />
                <PrimaryHeading
                  title={data.title}
                  h1Class={`md:text-[12px] lg:text-[14px] xl:text-[16px] font-normal
                     text-center w-full ${
                       data.id === 2 && "absolute top-[73%]"
                     }`}
                  spanClass="w-12 left-[50%] translate-x-[-50%]"
                />
              </div>
              <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-bgLight dark:bg-black"></div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-white bg-red" />
      <CarouselNext className="text-white bg-red" />
    </Carousel>
  );
}
