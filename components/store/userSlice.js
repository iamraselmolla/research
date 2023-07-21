import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    research: [],
    conferences: [],
    refresh: 0,
    singleConference: {},
    allUser: [],
    assignResearch: [],
    assignedFaculty: {},
    allResearches: [],
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.user = action.payload;
        },
        setAllResearch: (state, action) => {
            state.allResearches = action.payload
        },
        findAssignedFaculty: (state, action) => {
            state.assignedFaculty = action.payload
        },

        setAllConference: (state, action) => {
            state.conferences = action.payload
        },
        setSingleConference: (state, action) => {
            if (state.conferences?.length > 0) {
                const conferenceId = action.payload;
                const conference = state.conferences.find(
                    (conference) => conference?._id === conferenceId
                );
                if (conference) {
                    state.singleConference = conference;
                } else {
                    state.singleConference = {};
                }
            }
        },
        setAllUsers: (state, action) => {
           
            state.allUser = action.payload
        },
        setUserResearches: (state, action) => {
            state.research = action.payload
        },
        refreshDetails: (state, action) => {
            state.refresh++;
        },
        setFacultyAssignedResearch: (state, action) => {
            state.assignResearch = action.payload
        }

    }
})

export default userSlice;
export const userActions = userSlice.actions;