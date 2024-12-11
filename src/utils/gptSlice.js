import {createSlice} from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false,
        gptMovieResult: [],
    },
    reducers: {
        toggleGPTSearch: (state) => {
            state.showGPTSearch = !state.showGPTSearch
        },
        setGPTFalse: (state) => {
            state.showGPTSearch = false;
        },
        addGPTMovieResult: (state, action) => {
            state.gptMovieResult = action.payload;
        }
    }
});

export default gptSlice.reducer;
export const {
    toggleGPTSearch,
    addGPTMovieResult,
    setGPTFalse
} = gptSlice.actions;