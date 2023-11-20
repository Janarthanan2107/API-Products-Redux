// import a slice method to initialize the values fo a project
import { createSlice } from "@reduxjs/toolkit";

// getting the values from the fake store api which is added in the constants index file
import { url } from "../../constants";

const initialState = {
  productItems: url,
  //   isLoading: true,
};

export const productSlice = createSlice({
  // we should provide a name for the slice
  // it takes minimum two arguments
  name: "products",
  initialState,
});

console.log(productSlice);

export default productSlice.reducer;
