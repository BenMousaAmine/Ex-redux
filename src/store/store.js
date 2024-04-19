import {configureStore} from "@reduxjs/toolkit";
import postReducer from "./slice/postsSlice";
import cartReducer from "./slice/cartSlice";


const store = configureStore({
    reducer :{
        posts: postReducer,
        cart : cartReducer,
    }
})

export default store