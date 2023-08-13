import { createSlice } from "@reduxjs/toolkit";

export const newMarketingSlice = createSlice({
    name: "new-marketing",

    initialState: {
        category: {
            index: null,
            kr: null,
            en: null,
        },

        subcategory: {
            kr: null,
            en: null,
        },

        hashtags: [],

        brand: {
            name: null,
            info: null,
        },

        options: {
            mood: null,
            color: null,
        },

        brandImg: "",
    },

    reducers: {
        setCategory: (state, action) => {
            state.category.index = action.payload.index;
            state.category.kr = action.payload.kr;
            state.category.en = action.payload.en;
        },

        setSubCategory: (state, action) => {
            state.subcategory.kr = action.payload.kr;
            state.subcategory.en = action.payload.en;
        },

        appendHashTag: (state, action) => {
            state.hashtags.push(action.payload.tag);
        },

        setBrandName: (state, action) => {
            state.brand.name = action.payload;
        },

        setBrandInfo: (state, action) => {
            state.brand.info = action.payload;
        },

        setMoodOption: (state, action) => {
            state.options.mood = action.payload;
        },

        setColorOption: (state, action) => {
            state.options.color = action.payload;
        },

        setBrandImage: (state, action) => {
            state.brandImg = action.payload.img_base64;
        },
    },
});

export const newMarketingActions = newMarketingSlice.actions;
