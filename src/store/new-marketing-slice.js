import { createSlice } from "@reduxjs/toolkit";

import { postRequest } from "../utils/request";
import { generatedAssetsActions, generatedAssetsSlice } from "./generated-assets-slice";

const NEW_LOGO_API_URL = "/dai/api/logo";
const NEW_DESCRIPTION_API_URL = "/dai/api/description";

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
            state.brandImg = action.payload.img_base64;
        },
    },
});

export const NewMarketingFetchThunk = (requestBody) => {
    return async (dispatch) => {
        try {
            const response = await postRequest(NEW_LOGO_API_URL, requestBody);
            //
        } catch (err) {}
    };
};

export const newMarketingActions = newMarketingSlice.actions;
