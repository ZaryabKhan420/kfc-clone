import React, { Suspense } from "react";
import "./App.css";
const Header = React.lazy(() => import("./components/Header.jsx"));
const Footer = React.lazy(() => import("./components/Footer.jsx"));
import { Outlet, useLocation } from "react-router-dom";
import ErrorBoundaryWrapper from "./errorBoundary/ErrorBoundaryWrapper";

function App() {
  const location = useLocation();
  const showFooter = [
    "/",
    "/about-us",
    "/terms-condition",
    "/privacy-policy",
    "/mitao-Bhook",
    "/careers-page",
  ].includes(location.pathname);

  return (
    <div className="font-Roboto Condensed bg-bgLight dark:bg-bgButtonDark">
      <div>
        <ErrorBoundaryWrapper>
          <Suspense fallback={<div>Loading Header...</div>}>
            <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md dark:bg-black">
              {/* Add padding and shadow for better visibility */}
              <Header />
            </div>
          </Suspense>
        </ErrorBoundaryWrapper>
      </div>
      {/* Add top padding to prevent content overlap */}
      <div className="pt-[60px]">
        <Outlet />
      </div>
      {showFooter && (
        <div className="bg-bgLight dark:bg-bgButtonDark">
          <ErrorBoundaryWrapper>
            <Suspense fallback={<div>Loading Footer...</div>}>
              <div className="container">
                <Footer />
              </div>
            </Suspense>
          </ErrorBoundaryWrapper>
        </div>
      )}
    </div>
  );
}

export default App;
