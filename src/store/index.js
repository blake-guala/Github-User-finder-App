import { configureStore } from "@reduxjs/toolkit";
import gitReducer from "./github/gitSlice";

export const store = configureStore({
    reducer: {
        git : gitReducer,
    },

    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false })
})
