import { configureStore } from "@reduxjs/toolkit";
import HomeSliceReducer from "../slices/HomeSlice";


const store = configureStore({
    reducer : {
        home : HomeSliceReducer
    }
});

export default store