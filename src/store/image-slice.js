import { createSlice } from "@reduxjs/toolkit";

const UPLOAD_API_URL = "http://localhost:8081/dai/image/upload";

export const imageSlice = createSlice({
    name: "image",

    initialState: {
        directUploadURL: {
            status: null,
            id: null,
            url: null,
        },
    },

    reducers: {
        setDirectUploadURL: (state, action) => {
            state.directUploadURL.status = action.payload.status;
            state.directUploadURL.id = action.payload.id;
            state.directUploadURL.url = action.payload.url;
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
            const response = await fetch(UPLOAD_API_URL);
            if (!response.ok) throw new Error("Direct Upload URL Fetch Failed");
            return response.json();
        };

        try {
            const data = await request();

            dispatch(
                imageActions.setDirectUploadURL({
                    status: "success",
                    id: data.id,
                    url: data.url,
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
