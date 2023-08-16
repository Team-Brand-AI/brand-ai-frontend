import { createSlice } from "@reduxjs/toolkit";

const CARD_DATA_API_URL = "/dai/auth/searchCard";

export const userDataSlice = createSlice({
    name: "user",

    initialState: {
        name: null,

        email: null,

        cardList: {
            status: null,
            data: null,
        },
    },

    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },

        setEmail: (state, action) => {
            state.email = action.payload;
        },

        setCardList: (state, action) => {
            state.cardList.status = action.payload.status;
            state.cardList.data = action.payload.data;
        },
    },
});

export const UserDataFetchThunk = (token) => {
    return async (dispatch) => {
        dispatch(
            userDataActions.setCardList({
                status: "fetching",
                data: null,
            })
        );

        const request = async () => {
            const response = await fetch(`${CARD_DATA_API_URL}?token=${token}`);
            if (!response.ok) throw new Error("User Data Fetch Failed");
            return response.json();
        };

        try {
            const data = await request();
            dispatch(
                userDataActions.setCardList({
                    status: "success",
                    data: data,
                })
            );
        } catch (err) {
            dispatch(
                userDataActions.setCardList({
                    status: "failed",
                    data: null,
                })
            );
        }
    };
};

export const userDataActions = userDataSlice.actions;
