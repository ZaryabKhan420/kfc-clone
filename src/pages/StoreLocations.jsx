import React from "react";
import { WithAuthProtection } from "../components/index";
const StoreLocations = () => {
  return (
    <div className="bg-bgLight dark:bg-black mt-16 md:mt-5 lg:mt-8 py-5">
      StoreLocations
    </div>
  );
};

export default WithAuthProtection(StoreLocations, false);
