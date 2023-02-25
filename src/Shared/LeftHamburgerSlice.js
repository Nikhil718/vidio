import { createSlice } from "@reduxjs/toolkit";

const LeftHamburgerSlice = createSlice({
  name: "LeftHamburger",
  initialState: {
    isVisible: true,
  },
  reducers: {
    toggleHamburger: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});
export const { toggleHamburger } = LeftHamburgerSlice.actions;
export default LeftHamburgerSlice.reducer;
