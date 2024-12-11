import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import moviesReducer from "./moviesSlice.js";
import gptReducer from "./gptSlice.js";
import loadReducer from "./loadSlice.js";
const appStore = configureStore(
    {
        reducer: {
            user:userReducer,
            movies:moviesReducer,
            gpt:gptReducer,
            loader:loadReducer
        }
    }
)
export default appStore;