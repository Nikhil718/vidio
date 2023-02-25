import { configureStore } from "@reduxjs/toolkit";
import LeftHamburgerSlice from "./LeftHamburgerSlice";

const Store = configureStore({
  reducer: {
    LeftHamburger: LeftHamburgerSlice,
  },
});
export default Store;
