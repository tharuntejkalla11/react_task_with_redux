import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}
export const SortingOn = createSlice({

    name: "Sorting",
    initialState,
    reducers: {
        pushSortMethod: (state, action) => {
            return {
                ...state,
                value: action.payload.val,
            };
        },
    },
});


export const { pushSortMethod } = SortingOn.actions;
export default SortingOn.reducer;

