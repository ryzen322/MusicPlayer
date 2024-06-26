import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Images, MusicList } from "../types";

export interface CategoryPlayList {
  icons: Images[];
  href: string;
  id: string;
  name: string;
}

interface CategoryPlayListArray {
  item: CategoryPlayList[];
  related: MusicList[];
  artistInfo?: MusicList;
}

const initialState: CategoryPlayListArray = {
  item: [],
  related: [],
};

export const categorySlice = createSlice({
  name: "cartegory",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<CategoryPlayList[]>) => {
      // console.log(action.payload);
      state.item = action.payload;
    },
    setRelated: (state, action: PayloadAction<MusicList[]>) => {
      state.related = action.payload;
    },
    setArtistInfo: (state, action: PayloadAction<MusicList>) => {
      state.artistInfo = action.payload;
    },
  },
});

export default categorySlice.reducer;
export const { setCategory, setRelated, setArtistInfo } = categorySlice.actions;
