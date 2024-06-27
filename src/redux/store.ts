import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice/productsSlice";
import categoryReducer from "./slices/categoriesSlice/categoriesSlice";
import orderReducer from "./slices/orderSlice/orderSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    category: categoryReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
