import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../../../data.json";

interface OrdersState {
  orders: typeof data.orders;
}

const initialState: OrdersState = {
  orders: data.orders,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
});

export const {} = orderSlice.actions;

export const allOrders = (state: { order: OrdersState }) => state.order.orders;

export default orderSlice.reducer;
