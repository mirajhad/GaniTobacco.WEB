import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMenu: false,
};
export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
  },
});

export const { toggleMenu } = headerSlice.actions;
export default headerSlice.reducer;
