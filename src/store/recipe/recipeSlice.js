import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { nanoid } from "nanoid";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

export const fetchAllRecipes = createAsyncThunk(
  "recipes/fetchAllRecipes",
  async (limit) => {
    const response = await axios(
      `https://dummyjson.com/recipes?limit=${limit}`
    );
    return response.data.recipes;
  }
);

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addRecipe: {
      reducer: (state, { payload }) => {
        state.data = [payload, ...state.data];
        localStorage.setItem("recipes", JSON.stringify(state.data));
      },
      prepare: (name, image) => ({
        payload: {
          name,
          image,
          id: nanoid(),
        },
      }),
    },
    deleteRecipe: (state, { payload }) => {
      state.data = state.data.filter((recipe) => recipe.id !== payload);
      localStorage.setItem("recipes", JSON.stringify(state.data));
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllRecipes.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAllRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const getRecipes = (state) => state.recipes;
export const getRecipeById = (state, id) =>
  state.recipes.data.find((r) => r.id === id);
export const { addRecipe, deleteRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
