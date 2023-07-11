import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{},
    research: [],
    refresh:0
}

const userSlice=createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        setUserDetails:(state,action)=>{
            state.user=action.payload;
        },
        setUserResearches: (state, action) => {
            state.research=action.payload
        },
        refreshDetails:(state,action)=>{
            state.refresh++;
        }

    }
})

export default userSlice;
export const userActions=userSlice.actions;