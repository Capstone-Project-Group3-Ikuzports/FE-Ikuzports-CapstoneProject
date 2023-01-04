import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentAccess: {} };

const accessSlice = createSlice({
  name: "access",
  initialState,
  reducers: {
    updateAccess(state, action) {
      delete action.payload.state;
      return {
        ...state,
        currentAccess: action.payload,
      };
    },
    clearAccess(state) {
      return {
        ...state,
        currentAccess: {},
      };
    },
  },
});

export const { updateAccess, clearAccess } = accessSlice.actions;
export default accessSlice.reducer;
