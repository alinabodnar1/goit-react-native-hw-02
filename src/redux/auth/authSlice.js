import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: "", email: "" },
    userId: "",
    stateChange: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.userId = payload.userId;
        state.stateChange = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.userId = payload.userId;
        state.stateChange = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: "", email: "" };
        state.userId = "";
        state.stateChange = false;
      });
  },
});

export const authReducer = authSlice.reducer;
