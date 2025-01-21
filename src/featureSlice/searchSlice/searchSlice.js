import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState:{
        searchtab:false,
    },
    reducers:{
        toggleSearchTab:(state)=>{
            state.searchtab =!state.searchtab;
        }
    }
})

export const {toggleSearchTab}=searchSlice.actions
export default searchSlice.reducer