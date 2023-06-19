import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{}
}

const userSlice=createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        setUserDetails:(state,action)=>{
            state.user=action.payload;
        }
    }
})

export default userSlice;
export const userActions=userSlice.actions;