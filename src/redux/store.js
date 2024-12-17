import { configureStore } from "@reduxjs/toolkit";

import { campersReducer } from "./campers/slice.js";
// import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    // filters: filtersReducer,
  },
});
