import { configureStore } from "@reduxjs/toolkit";
import setProducts from "./slice/productsSlice";


const store = configureStore({
  reducer: {
    products: setProducts
  },

});

export default store;