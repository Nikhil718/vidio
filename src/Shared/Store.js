import { configureStore } from "@reduxjs/toolkit";
import ChatSlice from "./ChatSlice";
import LeftHamburgerSlice from "./LeftHamburgerSlice";
import SearchSlice from "./SearchSlice";

const Store = configureStore({
  reducer: {
    LeftHamburger: LeftHamburgerSlice,
    Search: SearchSlice,
    Chat: ChatSlice,
  },
});
export default Store;
