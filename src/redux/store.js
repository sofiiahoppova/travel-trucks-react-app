import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { campersReducer } from "./campers/slice.js";
// import { filtersReducer } from "./filtersSlice";

const camperConfig = {
  key: "favouriteKey",
  storage,
  whitelist: ["favouriteCampers"],
};

export const store = configureStore({
  reducer: {
    campers: persistReducer(camperConfig, campersReducer),
    // filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
