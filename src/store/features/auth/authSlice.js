import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: "",
  isLogin: false,
  dashboard: "اطلاعات کاربری",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUserData(state, action) {
      state.userData = action.payload;
      state.isLogin = true;
    },
    logOut(state, action) {
      state.userData = "";
      state.isLogin = false;
    },
    setDashboard(state, action) {
      state.dashboard = action.payload;
    },
  },
  extraReducers: {},
});
export default authSlice.reducer;
export const { getUserData, logOut, setDashboard } = authSlice.actions;
