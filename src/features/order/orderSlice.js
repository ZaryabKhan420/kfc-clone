import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderType: "delivery", // 'pickup' or 'delivery'
  orderDetails: {
    name: "",
    location: "",
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderType: (state, action) => {
      state.orderType = action.payload;
    },
    setOrderDetails: (state, action) => {
      state.orderDetails = action.payload;
    },
  },
});

export const { setOrderType, setOrderDetails } = orderSlice.actions;

export const selectOrderType = (state) => state.order.orderType;
export const selectOrderDetails = (state) => state.order.orderDetails;

export default orderSlice.reducer;
