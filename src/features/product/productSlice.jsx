// this is the syntax for creating the redux slice method

// import a slice method to initialize the values fo a project
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// getting the values from the fake store api which is added in the constants index file
// import { url } from "../../constants";

const API = "https://fakestoreapi.com/products";

export const getProductItems = createAsyncThunk(
  "products/getProductItems",
  async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log("Something went wrong!!", err);
    }
  }
);

const initialState = {
  productItems: [],
  isLoading: true,
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
  // extra reducer is added in api calls
  extraReducers: (builder) => {
    builder
      .addCase(getProductItems.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getProductItems.fulfilled, (state, action) => {
        console.log(action)
        state.isLoading = false;
        state.productItems = action.payload;
      })

      .addCase(getProductItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

// export that function alone for using on the function component or where ever we needed
export const { clearData } = productSlice.actions;

console.log(clearData());

export default productSlice.reducer;
