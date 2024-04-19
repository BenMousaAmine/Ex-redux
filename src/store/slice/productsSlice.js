import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
  data: [],
  loading: true,
  error: null,

}

export const fetchAllProducts = createAsyncThunk(
  "posts/fetchAllProducts",
  async (limit) => {
    const res = await axios.get(`https://dummyjson.com/products?limit=${limit}`);
    // console.log(res.data);
    return res.data.products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchAllProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error";
      });
  },
})


export const getAllProducts = (s) => {
  return s.products;
};

export const findProductById = (s, id) => {
  return s.products.data.find((p) => p.id === id);
};

export default productsSlice.reducer;