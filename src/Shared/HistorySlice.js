import { createSlice } from "@reduxjs/toolkit";

const HistorySlice = createSlice({
  name: "History",
  initialState: {
    watchedVideos: [],
  },
  reducers: {
    addWatchedVideos: (state, action) => {
      state.watchedVideos.push(action.payload);
    },
    removeWatchedVideo: (state, action) => {
      const newList = state.watchedVideos.filter(
        (video) => video.id !== action.payload.id
      );
      state.watchedVideos = newList;
    },
  },
});

export const { addWatchedVideos, removeWatchedVideo } = HistorySlice.actions;
export default HistorySlice.reducer;
