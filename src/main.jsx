import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { Store, persistor } from "./store/Store.js";
import { PersistGate } from "redux-persist/integration/react";
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
import { Provider } from "react-redux";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const FRONTEND_API = import.meta.env.VITE_CLERK_FRONTEND_API;

if (!PUBLISHABLE_KEY || !FRONTEND_API) {
  throw new Error("Missing Clerk keys in environment variables");
}

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
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
      frontendApi={FRONTEND_API}
    >
      <Provider store={Store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </ClerkProvider>
  </StrictMode>
);
