import { createSlice } from "@reduxjs/toolkit";

const UPLOAD_API_URL = "/dai/api/upload";

export const imageSlice = createSlice({
    name: "image",

    initialState: {
        directUploadURL: {
            status: null,
            data: null,
        },
    },

    reducers: {
        setDirectUploadURL: (state, action) => {
            state.directUploadURL.status = action.payload.status;
            state.directUploadURL.data = action.payload.data;
        },
    },
});

export const FetchDirectUploadURL = () => {
    return async (dispatch) => {
        dispatch(
            imageActions.setDirectUploadURL({
                status: "fetching",
                data: null,
            })
        );

        const request = async () => {
            const response = await fetch("/dai/api/upload");
            if (!response.ok) throw new Error("Direct Upload URL Fetch Failed");
            return response.json();
        };

        try {
            const data = await request();

            dispatch(
                imageActions.setDirectUploadURL({
                    status: "success",
                    data: data,
                })
            );
        } catch (err) {
            dispatch(
                imageActions.setDirectUploadURL({
                    status: "failed",
                    data: null,
                })
            );
        }
    };
};

export const imageActions = imageSlice.actions;

// curl --request POST \
//   --url https://api.cloudflare.com/client/v4/accounts/1bf54de1a5b83110fc3d92cc5907c7d3/images/v2/direct_upload \
//   --header 'Authorization: Bearer ebx6NnmTGpzPiqhUARqLa8rFyqoW7bIub40x_HMT' \
//   --header 'Content-Type: multipart/form-data' \
//   --form expiry= \
//   --form id= \
//   --form metadata= \
//   --form requireSignedURLs=
