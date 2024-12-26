import React from "react";
import { WithAuthProtection } from "../components/index";
const PrivacyPolicy = () => {
  return <div>PrivacyPolicy</div>;
};

export default WithAuthProtection(PrivacyPolicy, false);
