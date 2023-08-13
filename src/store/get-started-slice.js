import { createSlice } from "@reduxjs/toolkit";

export const getStartedSlice = createSlice({
    name: "get-started",

    initialState: {
        termsOfUse: false,
        gender: null,
    },

    reducers: {
        agreeTermsOfUse: (state, action) => {
            state.termsOfUse = true;
        },

        setGenderMan: (state, action) => {
            state.gender = "man";
        },

        setGenderWoman: (state, action) => {
            state.gender = "woman";
        },
    },
});

export const getStartedActions = getStartedSlice.actions;
