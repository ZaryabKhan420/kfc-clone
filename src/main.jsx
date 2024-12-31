import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorBoundaryWrapper from "./errorBoundary/ErrorBoundaryWrapper";

const Home = React.lazy(() => import("./pages/Home.jsx"));
const About = React.lazy(() => import("./pages/About.jsx"));
const Careers = React.lazy(() => import("./pages/Careers.jsx"));
const Contact = React.lazy(() => import("./pages/Contact.jsx"));
const Feedback = React.lazy(() => import("./pages/Feedback.jsx"));
const Menu = React.lazy(() => import("./pages/Menu.jsx"));
const MitaoBhook = React.lazy(() => import("./pages/MitaoBhook.jsx"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy.jsx"));
const StoreLocations = React.lazy(() => import("./pages/StoreLocations.jsx"));
const TermsConditions = React.lazy(() => import("./pages/TermsConditions.jsx"));
const TrackOrder = React.lazy(() => import("./pages/TrackOrder.jsx"));
const NotFound = React.lazy(() => import("./pages/NotFound.jsx"));
const Login = React.lazy(() => import("./pages/Login.jsx"));
const Bucket = React.lazy(() => import("./pages/Bucket.jsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <ErrorBoundaryWrapper>
          <Suspense fallback={<div>Loading Home...</div>}>
            <App />
          </Suspense>
        </ErrorBoundaryWrapper>
      }
    >
      <Route
        path=""
        element={
          <ErrorBoundaryWrapper>
            <Suspense fallback={<div>Loading Home...</div>}>
              <Home />
            </Suspense>
          </ErrorBoundaryWrapper>
        }
      />
      <Route
        path="/about-us"
        element={
          <ErrorBoundaryWrapper>
            <Suspense fallback={<div>Loading About...</div>}>
              <About />
            </Suspense>
          </ErrorBoundaryWrapper>
        }
      />
      <Route
        path="/feedback"
        element={
          <ErrorBoundaryWrapper>
            <Suspense fallback={<div>Loading Feedback...</div>}>
              <Feedback />
            </Suspense>
          </ErrorBoundaryWrapper>
        }
      />
      <Route
        path="/terms-condition"
        element={
          <ErrorBoundaryWrapper>
            <Suspense fallback={<div>Loading Terms and Conditions...</div>}>
              <TermsConditions />
            </Suspense>
          </ErrorBoundaryWrapper>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <ErrorBoundaryWrapper>
            <Suspense fallback={<div>Loading Privacy Policy...</div>}>
              <PrivacyPolicy />
            </Suspense>
          </ErrorBoundaryWrapper>
        }
      />
      <Route
        path="/contact-us"
        element={
          <ErrorBoundaryWrapper>
            <Suspense fallback={<div>Loading Contact...</div>}>
              <Contact />
            </Suspense>
          </ErrorBoundaryWrapper>
        }
      />
      <Route
        path="/mitao-Bhook"
        element={
          <ErrorBoundaryWrapper>
            <Suspense fallback={<div>Loading Mitao Bhook Page...</div>}>
              <MitaoBhook />
            </Suspense>
          </ErrorBoundaryWrapper>
        }
      />
      <Route
        path="/careers-page"
        element={
          <ErrorBoundaryWrapper>
            <Suspense fallback={<div>Loading Career Details...</div>}>
              <Careers />
            </Suspense>
          </ErrorBoundaryWrapper>
        }
      />
      <Route
        path="/store-locations"
        element={
          <ErrorBoundaryWrapper>
            <Suspense fallback={<div>Loading Store Locations...</div>}>
              <StoreLocations />
            </Suspense>
          </ErrorBoundaryWrapper>
        }
      />
      <Route
        path="/track-order"
        element={
          <ErrorBoundaryWrapper>
            <Suspense fallback={<div>Loading Track Order...</div>}>
              <TrackOrder />
            </Suspense>
          </ErrorBoundaryWrapper>
        }
      />
      <Route
        path="/menu"
        element={
          <ErrorBoundaryWrapper>
            <Suspense fallback={<div>Loading Menu...</div>}>
              <Menu />
            </Suspense>
          </ErrorBoundaryWrapper>
        }
      />
      <Route
        path="*"
        element={
          <ErrorBoundaryWrapper>
            <Suspense fallback={<div>Loading Not Found...</div>}>
              <NotFound />
            </Suspense>
          </ErrorBoundaryWrapper>
        }
      />
      <Route
        path="/login"
        element={
          <ErrorBoundaryWrapper>
            <Suspense fallback={<div>Loading Login...</div>}>
              <Login />
            </Suspense>
          </ErrorBoundaryWrapper>
        }
      />
      <Route
        path="/bucket"
        element={
          <ErrorBoundaryWrapper>
            <Suspense fallback={<div>Loading Bucket...</div>}>
              <Bucket />
            </Suspense>
          </ErrorBoundaryWrapper>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
