import React from "react";
import { WithAuthProtection } from "../components/index";
const Login = () => {
  return <div>Login</div>;
};

export default WithAuthProtection(Login, false);
