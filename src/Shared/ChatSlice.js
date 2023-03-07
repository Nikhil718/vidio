import { createSlice } from "@reduxjs/toolkit";
import { textLimit } from "../Components/Config/Constant";

const ChatSlice = createSlice({
  name: "Chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length > textLimit) state.messages.splice(0, 1);
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = ChatSlice.actions;
export default ChatSlice.reducer;
