import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./userSlice";
import { playlistSlice } from "./playlistSlice";
import { categorySlice } from "./categorySlice";
import { recommendationSlice } from "./recommendationSlice";
import { toolsSlice } from "./toolsSlice";
// import { trackSlice } from "./tractSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    // tract: trackSlice.reducer,
    user: UserSlice.reducer,
    playlist: playlistSlice.reducer,
    category: categorySlice.reducer,
    recommendation: recommendationSlice.reducer,
    playerSize: toolsSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;
