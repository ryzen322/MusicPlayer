import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  playingSize: false,
};

export const toolsSlice = createSlice({
  name: "tools",
  initialState,
  reducers: {
    setPlayingSize: (state, actions: PayloadAction<boolean>) => {
      state.playingSize = actions.payload;
    },
  },
});

export default toolsSlice.reducer;

export const { setPlayingSize } = toolsSlice.actions;
