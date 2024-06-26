import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  AlbumArtist,
  AlbumTracks,
  SingleAlbum,
  SingleAlbumResponse,
  TopPlaylist,
  topArtist,
} from "../types";

interface Images {
  height?: number | null;
  url: string;
  width?: number;
}

interface PlayListObj {
  collaborative: boolean;
  description: string | null;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
  public: boolean;
  tracks: {
    href: string;
    total: number;
  };
  snapshot_id: string;
  external_urls: {
    spotify: string;
  };
  primary_color?: string;
  owner?: {
    display_name?: string;
    id: string;
    type: string;
    uri: string;
  };
  images: Images[];
}

type AccesToken = string | null;
type PlaylistUri = string;
interface PlayListArr {
  playList: PlayListObj[];
  token: AccesToken;
  playlistUri: PlaylistUri[];
  topPlayList: TopPlaylist[];
  topArtistPlayList: topArtist[];
  artistAlbum: AlbumTracks[];
  single?: SingleAlbum[];
  featuring?: SingleAlbum[];
  singleAlbum: SingleAlbumResponse;
}

const initialState: PlayListArr = {
  playList: [],
  token: localStorage.getItem("accToken")
    ? localStorage.getItem("accToken")
    : null,
  playlistUri: [],
  topPlayList: [],
  topArtistPlayList: [],
  artistAlbum: [],
  featuring: [],
  single: [],
  singleAlbum: {
    album_type: "",
    artists: [],
    copyrights: [],
    href: "",
    id: "",
    images: [],
    label: "",
    name: "",
    popularity: 0,
    release_date: "",
    total_tracks: 0,
    tracks: {
      items: [],
    },
    type: "",
    uri: "",
  },
};

export const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPlaylist: (state, action: PayloadAction<PlayListObj[]>) => {
      state.playList = action.payload;
    },
    setAccesToken: (state, action: PayloadAction<AccesToken>) => {
      localStorage.setItem("accToken", `${action.payload}`);

      state.token = action.payload;
    },
    setPlay: (state, action: PayloadAction<string[]>) => {
      state.playlistUri = action.payload;
    },
    setTopPayList: (state, action: PayloadAction<TopPlaylist[]>) => {
      state.topPlayList = action.payload;
    },
    setArtistTopPlayList: (state, action: PayloadAction<topArtist[]>) => {
      state.topArtistPlayList = action.payload;
    },
    setArtistAlbum: (state, action: PayloadAction<AlbumTracks[]>) => {
      state.artistAlbum = action.payload;
    },
    setAlbum: (state, action: PayloadAction<AlbumArtist>) => {
      const single = action.payload?.items?.filter(
        (data) => data.album_type === "single"
      );
      const album = action.payload?.items?.filter(
        (data) => data.album_type === "album"
      );

      state.featuring = album;
      state.single = single;
    },
    singleAlbum: (state, action: PayloadAction<SingleAlbumResponse>) => {
      state.singleAlbum = action.payload;
    },
  },
});

export default playlistSlice.reducer;
export const {
  setPlaylist,
  setAccesToken,
  setPlay,
  setTopPayList,
  setArtistTopPlayList,
  setArtistAlbum,
  setAlbum,
  singleAlbum,
} = playlistSlice.actions;
