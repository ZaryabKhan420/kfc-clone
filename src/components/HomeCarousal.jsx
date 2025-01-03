import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const HomeCarousal = () => {
  const images = [
    {
      id: 1,
      url: "/carousal1.jpg",
    },
    {
      id: 2,
      url: "/carousal2.jpg",
    },
    {
      id: 3,
      url: "/carousal3.jpg",
    },
    {
      id: 4,
      url: "/carousal4.jpg",
    },
    {
      id: 5,
      url: "/carousal5.jpg",
    },
  ];
  return (
    <div className="w-[100%] m-auto">
      <Carousel
        className="w-full relative"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((data) => (
            <CarouselItem key={data.id}>
              <img
                src={data.url}
                alt={"KFC"}
                loading="lazy"
                className="w-full z-40"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <button className="absolute top-[50%] translate-y-[-50%] left-2 w-6 h-6 bg-red rounded-full flex justify-center items-center cursor-pointer">
          <FaAngleLeft className="text-white" size={15} />
          <CarouselPrevious className="absolute top-[50%] left-0 w-full h-full bg-transparent border-none text-transparent" />
        </button>

        <button className="absolute top-[50%]  translate-y-[-50%] right-2 w-6 h-6 bg-red rounded-full flex justify-center items-center cursor-pointer">
          <FaAngleRight className="text-white" size={15} />
          <CarouselNext className="absolute top-[50%] right-0 w-full h-full bg-transparent border-none text-transparent" />
        </button>
      </Carousel>
    </div>
  );
};

export default HomeCarousal;
