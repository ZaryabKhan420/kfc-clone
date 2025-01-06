import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
const WithAuthProtection = (WrappedComponent, requiresAuth) => {
  return (props) => {
    const { isSignedIn } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
      if (requiresAuth && !isSignedIn) {
        navigate("/login");
      }
      if (!requiresAuth && isSignedIn) {
        navigate("/");
      }
    }, [requiresAuth, isSignedIn, navigate]);

    if (requiresAuth && !isSignedIn) {
      return null;
    }
    return <WrappedComponent {...props} />;
  };
};

export default WithAuthProtection;
