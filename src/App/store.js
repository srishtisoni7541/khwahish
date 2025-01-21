import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../featureSlice/searchSlice/searchSlice"

export const store =configureStore({
    reducer:{
        search:searchReducer
    }
})