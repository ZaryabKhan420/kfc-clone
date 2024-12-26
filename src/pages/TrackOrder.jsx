import React from "react";
import { WithAuthProtection } from "../components/index";
const TrackOrder = () => {
  return <div>TrackOrder</div>;
};

export default WithAuthProtection(TrackOrder, false);
