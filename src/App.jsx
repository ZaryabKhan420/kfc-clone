import React, { Suspense } from "react";
import "./App.css";
const Header = React.lazy(() => import("./components/Header.jsx"));
const Footer = React.lazy(() => import("./components/Footer.jsx"));
import { Outlet, useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  const showFooter = [
    "/",
    "/about-us",
    "/terms-condition",
    "privacy-policy",
    "mitao-Bhook",
    "careers-page",
  ].includes(location.pathname);

  return (
    <div>
      <div>
        <Suspense fallback={<div message="Loading Header..." />}>
          <Header />
        </Suspense>
      </div>
      <div>
        <Outlet />
      </div>
      {showFooter && (
        <div className="bg-bgLight dark:bg-bgButtonDark">
          <Suspense fallback={<div message="Loading Footer..." />}>
            <div className="container">
              <Footer />
            </div>
          </Suspense>
        </div>
      )}
    </div>
  );
}

export default App;
