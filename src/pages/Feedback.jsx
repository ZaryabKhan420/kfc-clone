import React from "react";
import { WithAuthProtection } from "../components/index";
const Feedback = () => {
  return <div>Feedback</div>;
};

export default WithAuthProtection(Feedback, false);
