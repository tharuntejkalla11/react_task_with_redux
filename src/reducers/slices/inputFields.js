import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    searchText: "ok",
    searchBy: "",
}
export const inputFields = createSlice({

    name: "input",
    initialState,
    reducers: {
        pushInputFields: (state, action) => {
            return {
                ...state,
                searchText: action.payload.searchText,
                searchBy: action.payload.searchText,
            };
        },
    },
});


export const { pushInputFields } = inputFields.actions;
export default inputFields.reducer