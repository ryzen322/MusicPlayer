import { useDispatch } from "react-redux";
import { useAppSelector } from "../slice/store";
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { setPlaylist } from "../slice/playlistSlice";
const spotifyApi = new SpotifyWebApi();

export const useSpotifyPlayList = (id: string | undefined) => {
  const { token } = useAppSelector((state) => state.playlist);
  const dispatch = useDispatch();

  useEffect(() => {
    spotifyApi.setAccessToken(token);
    spotifyApi.getUserPlaylists().then((data) => {
      const playlist = data.items;

      dispatch(setPlaylist(playlist));
    });

    if (id) {
      spotifyApi.getPlaylist(id).then(() => {});
    }
    return () => {};
  }, [token, dispatch, id]);
};
