import React from "react";
import { WithAuthProtection } from "../components/index";
const Contact = () => {
  return <div>Contact</div>;
};

export default WithAuthProtection(Contact, false);
