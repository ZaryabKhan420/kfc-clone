import { Button } from "@/components/ui/button";
import React from "react";

const NotFound = () => {
  return (
    <div className="bg-bgLight dark:bg-black mt-16 md:mt-5 lg:mt-8 py-5 h-screen w-full flex flex-col justify-center items-center gap-2">
      <h1 className="text-5xl font-bold">404</h1>
      <p>Page Not Found</p>
      <Button className="bg-red text-white">Go to home</Button>
    </div>
  );
};

export default NotFound;
