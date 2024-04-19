import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./post/postsSlice";
import recipeReducer from "./recipe/recipeSlice";
import cartReducer from "./cart/cartSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    recipes: recipeReducer,
    cart: cartReducer,
  },
});

export default store;
