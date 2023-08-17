import { createSlice } from "@reduxjs/toolkit";

import { postRequest } from "../utils/request";
import { generatedAssetsActions, generatedAssetsSlice } from "./generated-assets-slice";

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
            mood: {
                index: null,
                kr: null,
                en: null,
            },
            color: {
                index: null,
                kr: null,
                en: null,
            },
        },

        brandImg: {
            isUploaded: false,
            imageType: null,
            imageData: null,
        },
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
            state.options.mood.index = action.payload.index;
            state.options.mood.kr = action.payload.text;

            if (action.payload.index === 0) state.options.mood.en = "Colorfully";
            if (action.payload.index === 1) state.options.mood.en = "Normal";
            if (action.payload.index === 2) state.options.mood.en = "Monotonously";
        },

        setColorOption: (state, action) => {
            state.options.color.index = action.payload.index;
            state.options.color.kr = action.payload.text;

            if (action.payload.index === 0) state.options.color.en = "Deep";
            if (action.payload.index === 1) state.options.color.en = "Normal";
            if (action.payload.index === 2) state.options.color.en = "Soft";
        },

        setBrandImage: (state, action) => {
            state.brandImg = action.payload;
        },

        initInputs: (state, action) => {
            state.category = {
                index: null,
                kr: null,
                en: null,
            };

            state.subcategory = {
                kr: null,
                en: null,
            };

            state.hashtags = [];

            state.brand = {
                name: null,
                info: null,
            };

            state.options = {
                mood: {
                    index: null,
                    kr: null,
                    en: null,
                },
                color: {
                    index: null,
                    kr: null,
                    en: null,
                },
            };

            state.brandImg = null;
        },
    },
});

export const newMarketingActions = newMarketingSlice.actions;
