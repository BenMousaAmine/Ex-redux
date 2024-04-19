import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { data: [], loading: false, error: null },
    reducers: {
        addPostToCart: (state, action) => {
            const payload = action.payload;
            const existingItemIndex = state.data.findIndex(item => item.id === payload.id);
            if (existingItemIndex !== -1) {
                state.data[existingItemIndex].quantity += 1;
            } else {
                state.data.push({ ...payload, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(state.data));
        },
        deleteFromCart: (state, action) => {
            const postId = action.payload;
            state.data = state.data.filter(item => item.id !== postId);
            localStorage.setItem("cart", JSON.stringify(state.data));
        },
        loadCart: (state) => {
            state.loading = true;
            try {
                const cartData = JSON.parse(localStorage.getItem("cart")) || [];
                state.data = cartData;
                state.loading = false;
            } catch (error) {
                state.error = error.message;
                state.loading = false;
            }
        },
    },
});

export const { addPostToCart, deleteFromCart, loadCart } = cartSlice.actions;

export const getCart = (state) => state.cart.data;

export default cartSlice.reducer;
