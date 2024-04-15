import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./post/postsSlice";
import recipeReducer from "./recipe/recipeSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    recipes: recipeReducer,
  },
});

export default store;
