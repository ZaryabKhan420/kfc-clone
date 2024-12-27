import React from "react";
import { WithAuthProtection } from "../components/index";
const Careers = () => {
  return (
    <div className="bg-bgLight dark:bg-black mt-16 md:mt-5 lg:mt-8 py-5">
      Careers
    </div>
  );
};

export default WithAuthProtection(Careers, false);
