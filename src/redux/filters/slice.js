import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filters: {},
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter(state, action) {
      state.filters = action.payload;
    },
    emptyFilter(state) {
      state.filters = {};
    },
  },
});

export const { changeFilter, emptyFilter } = filtersSlice.actions;
// Редюсер слайсу
export const filtersReducer = filtersSlice.reducer;
