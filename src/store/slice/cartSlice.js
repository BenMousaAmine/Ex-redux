import { createSlice, nanoid } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { data: [] },
  reducers: {
    addCart: {
      reducer: (state, { payload }) => {
        const existingItem = state.data.find((item) => item.id === payload.id);
        state.data = existingItem
          ? [
              ...state.data.filter((item) => item.id !== payload.id),
              {
                ...existingItem,
                quantity: existingItem.quantity + 1,
                id: nanoid()
              },
            ]
          : [...state.data, payload];
        localStorage.setItem("cart", JSON.stringify(state.data));
      },
      prepare: (product) => ({
        payload: {
          ...product,
          quantity: 1,
        },
      }),
    },
    loadCart: (state) => {
      state.data = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
    },
    deleteCart: (state, { payload }) => {
      state.data = state.data.filter((item) => item.id !== payload);
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
  },
})

export const { addCart, deleteCart, loadCart } = cartSlice.actions;

export const getCart = (s) => {
  return s.cart;
}

export default cartSlice.reducer;