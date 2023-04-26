import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  phone: "",
  date: "",
  name: "",
  surname: "",
  stateChange: false,
  error: null,
  isLoad: false,
};

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserProfileInProgress: (state) => ({
      ...state,
      isLoad: true,
    }),
    updateUserProfileSuccess: (state, action) => ({
      ...state,
      userId: action.payload.userId,
      name: action.payload.name,
      isLoad: false,
    }),
    updateUserProfileError: (state, action) => ({
      ...state,
      error: action.payload,
      isLoad: false,
    }),
    authStateChangeInProgress: (state) => ({ ...state, isLoad: true }),
    authStateChangeSuccess: (state, action) => ({
      ...state,
      stateChange: action.payload,
      isLoad: false,
      error: null,
    }),
    authStateChangeError: (state, action) => ({
      ...state,
      error: action.payload,
      isLoad: false,
    }),
    authSignOutInProgress: (state) => ({ ...state, isLoad: true }),
    authSignOutSuccess: (state) => ({ ...initialState }),
    authSignOutError: (state, action) => ({
      ...state,
      error: action.payload,
      isLoad: false,
    }),
  },
});

export const authActions = slice.actions;
