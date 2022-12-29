import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentUser: {} };

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUser(state, action) {
      delete action.payload.token;
      return {
        ...state,
        currentUser: action.payload,
      };
    },
    clearUSer(state) {
      return {
        ...state,
        currentUser: {},
      };
    },
  },
});

export const { updateUser, clearUSer } = userSlice.actions;
export default userSlice.reducer;
