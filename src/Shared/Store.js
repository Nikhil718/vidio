import { configureStore } from "@reduxjs/toolkit";
import ChatSlice from "./ChatSlice";
import HistorySlice from "./HistorySlice";
import LeftHamburgerSlice from "./LeftHamburgerSlice";
import SearchSlice from "./SearchSlice";

const Store = configureStore({
  reducer: {
    LeftHamburger: LeftHamburgerSlice,
    Search: SearchSlice,
    Chat: ChatSlice,
    History: HistorySlice,
  },
});
export default Store;
