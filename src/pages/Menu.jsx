import React from "react";
import { WithAuthProtection } from "../components/index";
const Menu = () => {
  return (
    <div className="bg-bgLight dark:bg-black mt-16 md:mt-5 lg:mt-8 py-5">
      Menu
    </div>
  );
};

export default WithAuthProtection(Menu, false);
