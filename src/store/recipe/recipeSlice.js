import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const initialState = {
  data: [],
  loading: true,
  error: null,
};

export const fetchAllRecipes = createAsyncThunk(
  "recipes/fetchAllRecipes",
  async (limit) => {
    const response = await fetch(
      `https://dummyjson.com/recipes?limit=${limit}`
    );
    const data = await response.json();
    return data;
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

export const getRecipes = (state) => state.recipes.data;
export const getRecipeById = (state, id) =>
  state.recipes.data.find((recipe) => recipe.id === id);

export const { addRecipe, deleteRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
