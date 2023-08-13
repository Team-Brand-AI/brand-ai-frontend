import { configureStore } from "@reduxjs/toolkit";

import { getStartedSlice } from "./get-started-slice";
import { newMarketingSlice } from "./new-marketing-slice";

export const store = configureStore({
    reducer: {
        getStarted: getStartedSlice.reducer,
        newMarketing: newMarketingSlice.reducer,
    },
});
