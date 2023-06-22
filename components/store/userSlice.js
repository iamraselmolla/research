import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{},
    refresh:0
}

const userSlice=createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        setUserDetails:(state,action)=>{
            state.user=action.payload;
        },
        refreshDetails:(state,action)=>{
            state.refresh++;
        }

    }
})

export default userSlice;
export const userActions=userSlice.actions;