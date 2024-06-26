import SpotifyWebApi from "spotify-web-api-js";
import { useAppSelector } from "../slice/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { singleAlbum } from "../slice/playlistSlice";

const spotifyApi = new SpotifyWebApi();

const useSpotifyAlbum = (id: string) => {
  const { token } = useAppSelector((state) => state.playlist);
  const dispatch = useDispatch();

  useEffect(() => {
    spotifyApi.setAccessToken(token);

    spotifyApi.getAlbum(id).then((data) => {
      // album of amircan dream of 21 savage example
      console.log(data);
      dispatch(singleAlbum(data));
    });

    spotifyApi.searchArtists("21 savage", { limit: 2 }).then((data) => {
      // data of 21 savage
      console.log(data);
    });
  }, [token, dispatch, id]);
};

export default useSpotifyAlbum;
