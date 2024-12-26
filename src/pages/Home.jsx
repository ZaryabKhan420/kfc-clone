import React from "react";
import { WithAuthProtection, HomeCarousal } from "../components/index";
import { Button } from "@/components/ui/button";
const Home = () => {
  return (
    <div className="bg-bgLight dark:bg-black">
      <HomeCarousal />
      <div className="container py-5 w-full">
        <Button className="flex justify-center items-center bg-red w-full md:w-[50%] m-auto text-white">
          REORDER
        </Button>
      </div>
    </div>
  );
};

export default WithAuthProtection(Home, false);
