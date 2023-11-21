// this is the syntax for creating the redux slice method

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
  reducers: {
    // this is a function which is created for clearing data from the dom
    clearData: (state) => {
      state.productItems = [];
    },
  },
});

// export that function alone for using on the function component or where ever we needed
export const { clearData } = productSlice.actions;

console.log(clearData());

export default productSlice.reducer;
