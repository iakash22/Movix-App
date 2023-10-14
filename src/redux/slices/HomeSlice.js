import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url : {},
    genres : {},
};


export const HomeSlice = createSlice({
    name : "home",
    initialState,
    reducers : {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
    }
});

export const { getApiConfiguration, getGenres } = HomeSlice.actions;
export default HomeSlice.reducer;