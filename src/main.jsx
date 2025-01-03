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

import {
  Home,
  About,
  Careers,
  Contact,
  Feedback,
  Menu,
  MitaoBhook,
  PrivacyPolicy,
  StoreLocations,
  TermsConditions,
  TrackOrder,
  NotFound,
  Login,
  Bucket,
} from "./pages/index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/terms-condition" element={<TermsConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/mitao-Bhook" element={<MitaoBhook />} />
      <Route path="/careers-page" element={<Careers />} />
      <Route path="/store-locations" element={<StoreLocations />} />
      <Route path="/track-order" element={<TrackOrder />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/bucket" element={<Bucket />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
