import React from "react";
import { WithAuthProtection } from "../components/index";
const Menu = () => {
  return <div>Menu</div>;
};

export default WithAuthProtection(Menu, false);
