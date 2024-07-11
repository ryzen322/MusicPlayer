import { useDispatch } from "react-redux";
import { useAppSelector } from "../slice/store";
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { setPlaylist } from "../slice/playlistSlice";
import { setTrack } from "../slice/tractSlice";
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
      spotifyApi.getPlaylist(id).then((data) => {
        dispatch(setTrack(data));
      });
    }
    return () => {
      dispatch(setTrack(null));
    };
  }, [token, dispatch, id]);
};
