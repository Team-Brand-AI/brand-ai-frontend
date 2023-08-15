import { createSlice } from "@reduxjs/toolkit";

const NEW_LOGO_API_URL = "/api/logo";
const NEW_PROMPT_API_URL = "/api/";

export const generatedAssetsSlice = createSlice({
    name: "generated-assets",

    initialState: {
        logo: {
            state: null,
            url: [],
        },

        prompt: {
            state: null,

            feature_first: "",
            feature_description_1: "",

            feature_second: "",
            feature_description_2: "",

            feature_third: "",
            feature_description_3: "",

            promotion: "",

            product_name: "",

            introduction: "",
        },
    },

    reducers: {
        setLogoState: (state, action) => {
            state.logo.state = action.payload;
        },

        setPromptState: (state, action) => {
            state.prompt.state = action.payload;
        },

        setLogoUrl: (state, action) => {
            state.logo.url.push(action.payload);
        },

        setPrompt: (state, action) => {
            state.prompt = action.payload;
        },
    },
});

export const NewLogoFetchThunk = () => {
    return async (dispatch) => {
        const request = async () => {
            const response = await fetch(NEW_LOGO_API_URL, {
                method: "POST",
                headers: { "Content-Type": "applictation/json" },
            });
            if (!response.ok) throw new Error("New Logo Post Request Failed");
            return response.json();
        };

        try {
            const data = await request();
            dispatch(generatedAssetsActions.setLogoState("success"));

            for (const url of data.url) {
                dispatch(generatedAssetsActions.setLogoUrl(url));
            }
        } catch (err) {
            dispatch(dispatch(generatedAssetsActions.setLogoState("failed")));
        }
    };
};

export const NewPromptFetchThunk = () => {
    return async (dispatch) => {
        const request = async () => {
            const response = await fetch(NEW_PROMPT_API_URL, {
                method: "POST",
                headers: { "Content-Type": "applictation/json" },
            });
            if (!response.ok) throw new Error("New Logo Post Request Failed");
            return response.json();
        };

        try {
            const data = await request();
            dispatch(generatedAssetsActions.setLogoState("success"));

            for (const url of data.url) {
                dispatch(generatedAssetsActions.setLogoUrl(url));
            }
        } catch (err) {
            dispatch(generatedAssetsActions.setLogoState("failed"));
        }
    };
};

export const generatedAssetsActions = generatedAssetsSlice.actions;
