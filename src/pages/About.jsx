import React from "react";
import { WithAuthProtection } from "../components/index";
const About = () => {
  return <div>About</div>;
};

export default WithAuthProtection(About, false);
