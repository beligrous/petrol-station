import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { slice } from "./auth/slice";

const rootReducer = combineReducers({
  auth: slice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
