import { createSlice } from "@reduxjs/toolkit";
const initialState: {
  currentUser : {
    _id: string, username: string, password: string,
    firstName: string, lastName: string, email: string, dob: string, role: string,
  } | null} = {
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
    }
  },
});
export const { setCurrentUser, updateUser } = accountSlice.actions;
export default accountSlice.reducer;