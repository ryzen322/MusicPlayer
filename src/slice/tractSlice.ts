import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tracks } from "../types";

interface TrackList {
  track: Tracks | null;
}

const initialState: TrackList = {
  track: null,
};

export const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    setTrack: (state, action: PayloadAction<Tracks | null>) => {
      state.track = action.payload;
    },
  },
});

export default trackSlice.reducer;
export const { setTrack } = trackSlice.actions;
