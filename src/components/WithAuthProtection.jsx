import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const WithAuthProtection = (WrappedComponent, requiresAuth) => {
  return (props) => {
    const navigate = useNavigate();
    useEffect(() => {
      const isUserLoggedIn = true; //value comes from clerk
      if (requiresAuth && !isUserLoggedIn) {
        navigate("/login");
      }
    }, [requiresAuth, navigate]);
    return <WrappedComponent {...props} />;
  };
};

export default WithAuthProtection;
