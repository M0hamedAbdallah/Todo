import { configureStore } from "@reduxjs/toolkit";
import { Api } from "../services/Api"
export const store = configureStore({
    reducer: {
        [Api.reducerPath] : Api.reducer
    },
    middleware : (getDefaultMiddleware) =>
    {
        console.log(getDefaultMiddleware);
        console.log(Api);
        return getDefaultMiddleware().concat(Api.middleware)
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;