import { createSlice } from "@reduxjs/toolkit";

import { fetchAllCampers } from "./operations";

const INITIAL_STATE = {
  campers: {
    items: [],
    current: {},
    loading: false,
    error: null,
  },
};

const campersSlice = createSlice({
  name: "campers",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCampers.pending, (state) => {
        state.contacts.loading = true;
        state.contacts.error = null;
      })
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchAllCampers.rejected, (state) => {
        state.contacts.loading = false;
        state.contacts.error = true;
      })
      .addCase(fetchCamperDetails.pending, (state) => {
        state.contacts.loading = true;
        state.contacts.error = null;
      })
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.current = action.payload;
      })
      .addCase(fetchCamperDetails.rejected, (state) => {
        state.contacts.loading = false;
        state.contacts.error = true;
      });
  },
});

export const campersReducer = campersSlice.reducer;
