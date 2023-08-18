import { createSlice } from "@reduxjs/toolkit";

const NEW_LOGO_API_URL = "http://3.38.234.172:8080/dai/api/logo";
const NEW_DESCRIPTION_API_URL = "http://3.38.234.172:8080/dai/api/description";
const NEW_CARD_API_URL = "http://3.38.234.172:8080/dai/auth/card";

export const generatedAssetsSlice = createSlice({
    name: "generated-assets",

    initialState: {
        logo: {
            state: null,
            url: null,
        },

        description: {
            state: null,
            data: null,
        },

        imagePath: {
            state: null,
            data: null,
        },

        cardUpload: {
            state: null,
        },
    },

    reducers: {
        setLogo: (state, action) => {
            state.logo = action.payload;
        },

        setDescription: (state, action) => {
            state.description = action.payload;
        },

        setCardUploadState: (state, action) => {
            state.cardUpload.state = action.payload;
        },
    },
});

export const NewLogoFetchThunk = (requestBody) => {
    return async (dispatch) => {
        const request = async () => {
            const response = await fetch(NEW_LOGO_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });
            if (!response.ok) throw new Error("New Logo Request Failed");
            return response.json();
        };

        try {
            const data = await request();
            dispatch(
                generatedAssetsActions.setLogo({
                    state: "success",
                    url: data.url,
                })
            );
        } catch (err) {
            dispatch(
                generatedAssetsActions.setLogo({
                    state: "failed",
                    url: null,
                })
            );
        }
    };
};

export const NewDescriptionFetchThunk = (requestBody) => {
    return async (dispatch) => {
        const request = async () => {
            const response = await fetch(NEW_DESCRIPTION_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });
            if (!response.ok) throw new Error("New Description Request Failed");
            return response.json();
        };

        try {
            const data = await request();
            dispatch(
                generatedAssetsActions.setDescription({
                    state: "success",
                    data: data,
                })
            );
        } catch (err) {
            dispatch(
                generatedAssetsActions.setDescription({
                    state: "failed",
                    data: null,
                })
            );
        }
    };
};

export const NewCardFetchThunk = (token, requestBody) => {
    return async (dispatch) => {
        const request = async () => {
            const response = await fetch(`${NEW_CARD_API_URL}?token=${token}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) throw new Error("New Card Request Failed!");
            return response.json();
        };

        try {
            const data = await request();
            dispatch(generatedAssetsActions.setCardUploadState("success"));
        } catch (err) {
            dispatch(generatedAssetsActions.setCardUploadState("failed"));
        }
    };
};

export const generatedAssetsActions = generatedAssetsSlice.actions;
