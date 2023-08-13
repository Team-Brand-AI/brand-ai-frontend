import { createSlice } from "@reduxjs/toolkit";

export const newMarketingSlice = createSlice({
    name: "new-marketing",

    initialState: {
        category_index: null,
        category_kr: null,
        category_en: null,

        subcategory_kr: null,
        subcategory_en: null,

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
            state.category_index = action.payload.index;
            state.category_kr = action.payload.kr;
            state.category_en = action.payload.en;
        },

        setSubCategory: (state, action) => {
            state.subcategory_kr = action.payload.kr;
            state.subcategory_en = action.payload.en;
        },

        appendHashTag: (state, action) => {
            state.hashtags.push(action.payload.tag);
        },

        setBrandName: (state, action) => {
            state.brandName = action.payload;
        },

        setBrandInfo: (state, action) => {
            state.brandInfo = action.payload;
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
