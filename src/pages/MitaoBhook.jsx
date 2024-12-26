import React from "react";
import { WithAuthProtection } from "../components/index";
const MitaoBhook = () => {
  return <div>MitaoBhook</div>;
};

export default WithAuthProtection(MitaoBhook, false);
