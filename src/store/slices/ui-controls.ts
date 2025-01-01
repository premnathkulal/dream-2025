import { createSlice } from "@reduxjs/toolkit";

const uiControls = createSlice({
  name: "uiControls",
  initialState: {
    isDrawerMenuOpen: false,
  },
  reducers: {
    toggleDrawerMenu(state, actions) {
      state.isDrawerMenuOpen = actions.payload;
    },
  },
});

export const { toggleDrawerMenu } = uiControls.actions;
export default uiControls.reducer;
