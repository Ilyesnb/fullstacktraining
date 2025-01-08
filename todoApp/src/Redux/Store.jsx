import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Slices/TodoSlices"
export const store = configureStore({
    reducer:{
        todos:todoReducer

    }
})