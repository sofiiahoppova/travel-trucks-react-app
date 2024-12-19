import { createSlice } from "@reduxjs/toolkit";

import { fetchAllCampers, fetchCamperDetails } from "./operations";

const INITIAL_STATE = {
  campers: {
    items: [],
    current: {},

    loading: false,
    error: null,
  },
  favouriteCampers: [],
};

const campersSlice = createSlice({
  name: "campers",
  initialState: INITIAL_STATE,
  reducers: {
    addFavourite(state, action) {
      state.favouriteCampers.push(action.payload);
    },
    removeFavourite(state, action) {
      state.favouriteCampers = state.favouriteCampers.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCampers.pending, (state) => {
        state.campers.loading = true;
        state.campers.error = null;
      })
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.campers.loading = false;
        state.campers.items = [...state.campers.items, ...action.payload.items];
      })
      .addCase(fetchAllCampers.rejected, (state) => {
        state.campers.loading = false;
        state.campers.error = true;
      })
      .addCase(fetchCamperDetails.pending, (state) => {
        state.campers.loading = true;
        state.campers.error = null;
      })
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.campers.loading = false;
        state.campers.current = action.payload;
      })
      .addCase(fetchCamperDetails.rejected, (state) => {
        state.campers.loading = false;
        state.campers.error = true;
      });
  },
});

export const { addFavourite, removeFavourite } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
