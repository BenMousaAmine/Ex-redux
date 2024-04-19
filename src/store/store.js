import { configureStore } from "@reduxjs/toolkit";
import setProducts from "./slice/productsSlice";
import setCart from "./slice/cartSlice";


const store = configureStore({
  reducer: {
    products: setProducts,
    cart: setCart,
  },

});

export default store;