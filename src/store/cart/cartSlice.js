import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { data: [] },
  reducers: {
    addRecipeToCart: (state, { payload }) => {
      state.data = [...state.data, payload];
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    loadCart: (state) => {
      state.data = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
    },
    deleteFromCart: (state, { payload }) => {
      state.data = state.data.filter((item) => item.id !== payload);
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
  },
});

export const { addRecipeToCart, loadCart, deleteFromCart } = cartSlice.actions;
export const getCart = (state) => state.cart.data;

export default cartSlice.reducer;
