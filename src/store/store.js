import { configureStore } from "@reduxjs/toolkit";

import { getStartedSlice } from "./get-started-slice";
import { newMarketingSlice } from "./new-marketing-slice";
import { generatedAssetsSlice } from "./generated-assets-slice";
import { authSlice } from "./auth-slice";

export const store = configureStore({
    reducer: {
        getStarted: getStartedSlice.reducer,
        newMarketing: newMarketingSlice.reducer,
        generatedAssets: generatedAssetsSlice.reducer,
        auth: authSlice.reducer,
    },
});
