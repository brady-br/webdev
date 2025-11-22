import { createSlice } from "@reduxjs/toolkit";
import { users } from "../Database";
const initialState: {
  users: {
    _id: string, username: string, password: string,
    firstName: string, lastName: string, email: string, dob: string, role: string,
  }[],
  currentUser : {
    _id: string, username: string, password: string,
    firstName: string, lastName: string, email: string, dob: string, role: string,
  } | null} = {
  users: users,
  currentUser: null,
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    updateUser: (state, {payload: user}) => {
      if (state.currentUser?._id === user._id) state.currentUser = user;
      state.users = state.users.map((u) =>
        u._id === user._id ? user : u);
    }
  },
});
export const { setCurrentUser, updateUser } = accountSlice.actions;
export default accountSlice.reducer;