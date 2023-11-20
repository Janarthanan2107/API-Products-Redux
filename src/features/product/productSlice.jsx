// import a slice method to initialize the values fo a project
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productItems: [],
  isLoading: true,
};

export const productSlice = createSlice({
  // we should provide a name for the slice
  name: "products",
  initialState,
});

console.log(productSlice);

export default productSlice.reducer;
