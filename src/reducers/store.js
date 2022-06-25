import { configureStore } from "@reduxjs/toolkit";
import { sortBased } from "./slices/sortingOn";
import inputFields from "./slices/inputFields";
import asyncApiCaller from "./slices/asyncApiCaller";


const store = configureStore({
    reducer: {
        input: inputFields,
        asyncApiCaller: asyncApiCaller,
    },
})
export default store