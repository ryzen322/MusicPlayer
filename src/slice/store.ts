import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./userSlice";
import { playlistSlice } from "./playlistSlice";
import { categorySlice } from "./categorySlice";
import { recommendationSlice } from "./recommendationSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { toolsSlice } from "./toolsSlice";

const store = configureStore({
  reducer: {
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
