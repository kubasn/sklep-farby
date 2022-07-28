import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  userImg: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginInfo: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
      state.userImg = payload.userImg;
    },
    logout: (state) => {
      state.name = null;
      state.email = null;
      state.userImg = null;
    },
  },
});

export const selectUserInfo = (state) => state.user;

export const { setLoginInfo, logout } = userSlice.actions;

export default userSlice.reducer;
