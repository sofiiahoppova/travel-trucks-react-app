import { createSlice } from "@reduxjs/toolkit";

import { fetchAllCampers, fetchCamperDetails } from "./operations";

const handlePending = (state) => {
  state.campers.loading = true;
  state.campers.error = null;
};

const handleRejected = (state, action) => {
  state.campers.loading = false;
  state.campers.error = true;
};

const INITIAL_STATE = {
  campers: {
    items: [],
    current: {},
    total: null,
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
    resetCampers(state) {
      state.campers.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCampers.pending, handlePending)
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.campers.loading = false;
        state.campers.items = action.payload.items;
        state.campers.total = action.payload.total;
      })
      .addCase(fetchAllCampers.rejected, handleRejected)
      .addCase(fetchCamperDetails.pending, handlePending)
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.campers.loading = false;
        state.campers.current = action.payload;
      })
      .addCase(fetchCamperDetails.rejected, handleRejected);
  },
});

export const { addFavourite, removeFavourite, resetCampers } =
  campersSlice.actions;
export const campersReducer = campersSlice.reducer;
