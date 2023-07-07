import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: "",
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUserData(state, action) {
      state.userData = action.payload;
      state.isLogin = true;
    },
  },
  extraReducers: {},
});
export default authSlice.reducer;
export const { getUserData } = authSlice.actions;
