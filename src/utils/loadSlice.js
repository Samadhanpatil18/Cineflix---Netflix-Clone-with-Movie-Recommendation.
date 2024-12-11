import {createSlice} from "@reduxjs/toolkit";

const loadSlice = createSlice({
    name: "loader",
    initialState: {
        loadingState: null
    },
    reducers: {
        addLoadingState: (state, action) => {
            state.loadingState = action.payload;
        }
    }
})

export const {addLoadingState} = loadSlice.actions;

export default loadSlice.reducer;