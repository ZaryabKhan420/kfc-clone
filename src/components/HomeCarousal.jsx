import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
        className="w-full"
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
              <img src={data.url} alt={"KFC"} loading="lazy" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-50% left-5 bg-red border-none" />
        <CarouselNext className="absolute top-50% right-5 bg-red border-none" />
      </Carousel>
    </div>
  );
};

export default HomeCarousal;
