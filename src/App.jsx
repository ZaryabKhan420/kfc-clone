import React, { Suspense } from "react";
import "./App.css";
const Header = React.lazy(() => import("./components/Header.jsx"));
const Footer = React.lazy(() => import("./components/Footer.jsx"));
import { Outlet, useLocation } from "react-router-dom";
import ErrorBoundaryWrapper from "./errorBoundary/ErrorBoundaryWrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <ErrorBoundaryWrapper>
      <Suspense fallback={<div>Loading</div>}>
        <div className="font-Roboto Condensed bg-bgLight dark:bg-bgButtonDark">
          <div>
            <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md dark:bg-black">
              {/* Add padding and shadow for better visibility */}
              <Header />
            </div>
          </div>
          {/* Add top padding to prevent content overlap */}
          <div className="pt-[60px]">
            <Outlet />
          </div>
          {showFooter && (
            <div className="bg-bgLight dark:bg-bgButtonDark">
              <div className="container">
                <Footer />
              </div>
            </div>
          )}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </Suspense>
    </ErrorBoundaryWrapper>
  );
}

export default App;
