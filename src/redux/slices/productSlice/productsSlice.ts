import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ordersAndBikesData from "../../../data.json";

interface Bike {
  id: string;
  model: string;
  category: string;
  engine: string;
  horsepower: string;
  torque: string;
  image: string;
  availability: number;
}

interface ProductState {
  bikes: Bike[];
  bikeModel: Bike | null;
}

const initialState: ProductState = {
  bikes: ordersAndBikesData.yamahaBikes as Bike[],
  bikeModel: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setBikeModel: (state, action: PayloadAction<Bike>) => {
      state.bikeModel = action.payload;
    },
    addBike: (state, action: PayloadAction<Bike>) => {
      state.bikes.push(action.payload);
    },
    removeBike: (state, action: PayloadAction<string>) => {
      state.bikes = state.bikes.filter((bike) => bike.model !== action.payload);
    },
    updateBike: (state, action: PayloadAction<Bike>) => {
      const index = state.bikes.findIndex(
        (bike) => bike.id === action.payload.id
      );
      if (index !== -1) {
        state.bikes[index] = action.payload;
        state.bikeModel = null;
      }
    },
  },
});

export const { setBikeModel, addBike, removeBike, updateBike } =
  productsSlice.actions;

export const selectBikes = (state: { products: ProductState }) =>
  state.products.bikes;

export default productsSlice.reducer;
