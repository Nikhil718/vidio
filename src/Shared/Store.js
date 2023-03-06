import { configureStore } from "@reduxjs/toolkit";
import LeftHamburgerSlice from "./LeftHamburgerSlice";
import SearchSlice from "./SearchSlice";

const Store = configureStore({
  reducer: {
    LeftHamburger: LeftHamburgerSlice,
    Search: SearchSlice,
  },
});
export default Store;
