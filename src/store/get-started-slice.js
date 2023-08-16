import { createSlice } from "@reduxjs/toolkit";

export const getStartedSlice = createSlice({
    name: "get-started",

    initialState: {
        termsOfUse: false,
        gender: null,
        age: 0,
    },

    reducers: {
        agreeTermsOfUse: (state, action) => {
            state.termsOfUse = true;
        },

        disagreeTermsOfUse: (state, action) => {
            state.termsOfUse = false;
        },

        setGenderMan: (state, action) => {
            state.gender = "man";
        },

        setGenderWoman: (state, action) => {
            state.gender = "woman";
        },

        setAge: (state, action) => {
            state.age = action.payload.age;
        },
    },
});

export const getStartedActions = getStartedSlice.actions;
