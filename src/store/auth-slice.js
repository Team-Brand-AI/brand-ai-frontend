import { createSlice } from "@reduxjs/toolkit";

const LOGIN_REDIRECT_API_URL = "http://3.38.234.172:8080/dai/auth/kakao?code=";

export const authSlice = createSlice({
    name: "auth",

    initialState: {
        code: "",

        token: {
            status: null,
            data: null,
        },
    },

    reducers: {
        setCode: (state, action) => {
            state.code = action.payload;
        },

        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
});
export const authActions = authSlice.actions;

export const RedirectAuthThunk = (code) => {
    return async (dispatch) => {
        const request = async () => {
            const response = await fetch(LOGIN_REDIRECT_API_URL + code);
            if (!response.ok) throw new Error("Login Auth Failed!");
            return response.json();
        };

        try {
            const data = await request();
            dispatch(authActions.setToken({ status: "success", data: data.token }));
        } catch (err) {
            dispatch(authActions.setToken({ status: "failed", data: null }));
        }
    };
};

