import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage as default storage
import { combineReducers } from "redux";
import themeReducer from "@/features/theme/themeSlice";
import orderReducer from "@/features/order/orderSlice";
import userReducer from "@/features/user/userSlice";

// Persist configuration for theme and order slices
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme", "order", "user"], // Only persist theme and order slices
};

// Combine the reducers
const rootReducer = combineReducers({
  theme: themeReducer,
  order: orderReducer,
  user: userReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store using the persisted reducer
const Store = configureStore({
  reducer: persistedReducer, // This will be the persisted reducer
});

// Create persistor
const persistor = persistStore(Store);

export { Store, persistor };
