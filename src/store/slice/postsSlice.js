import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const initialState = {
    data : [],
    loading : true,
    error : null
}
export const fetchAllPosts =  createAsyncThunk (
    "posts/fetchAllPosts",
    async (limit) => {
        const res = await axios.get(`https://dummyjson.com/posts?limit=${limit}`);
        return res.data.posts;
    }
)

const postSlice = createSlice({
    name :"posts",
    initialState,
    reducers : {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchAllPosts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchAllPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAllPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
})

export const getAllPosts = (s) => {
    console.log(s.posts.data.posts)
    return s.posts;
}
export const findPostById = (s, id) => {
    return s.posts.data.find(p => p.id === id);
};
export default postSlice.reducer;