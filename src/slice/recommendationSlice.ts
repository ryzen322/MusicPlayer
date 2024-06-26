import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FeatureObj, PlayList, RecommenObject, Recommend } from "../types";

const initialState: Recommend = {
  local: [],
  international: [],
  topArtist: [],
};

export const recommendationSlice = createSlice({
  name: "Recommendation",
  initialState,
  reducers: {
    setRecommendationLocal: (
      state,
      actions: PayloadAction<RecommenObject[]>
    ) => {
      state.international = actions.payload;
    },
    setRecommendationIntl: (state, actions: PayloadAction<PlayList[]>) => {
      state.local = actions.payload;
    },
    setTopArtist: (state, action: PayloadAction<FeatureObj[]>) => {
      state.topArtist = action.payload;
    },
  },
});

export default recommendationSlice.reducer;
export const { setRecommendationLocal, setRecommendationIntl, setTopArtist } =
  recommendationSlice.actions;
