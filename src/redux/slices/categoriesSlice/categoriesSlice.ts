import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../../../data.json";

interface CategoriesState {
  categories: typeof data.bikeCategories;
  selectedCategory: string;
  deleteCategory: boolean;
}

const initialState: CategoriesState = {
  categories: data.bikeCategories,
  deleteCategory: false,
  selectedCategory: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (
      state,
      action: PayloadAction<{ name: string; description: string }>
    ) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action: PayloadAction<string>) => {
      state.categories = state.categories.filter(
        (category) => category.name !== action.payload
      );
    },
    toggleDeleteCategory: (state) => {
      state.deleteCategory = !state.deleteCategory;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const {
  addCategory,
  removeCategory,
  toggleDeleteCategory,
  setSelectedCategory,
} = categorySlice.actions;

export const selectCategories = (state: { category: CategoriesState }) =>
  state.category.categories;
export const selectDeleteCategory = (state: { category: CategoriesState }) =>
  state.category.deleteCategory;
export const selectSelectedCategory = (state: { category: CategoriesState }) =>
  state.category.selectedCategory;

export default categorySlice.reducer;
