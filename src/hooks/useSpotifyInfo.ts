import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useAppSelector } from "../slice/store";
import { useDispatch } from "react-redux";
import {
  setAccesToken,
  setAlbum,
  setArtistAlbum,
  setArtistTopPlayList,
  setPlaylist,
} from "../slice/playlistSlice";
import { setRelated, setArtistInfo } from "../slice/categorySlice";

type userInfoId = string | undefined;

const spotifyApi = new SpotifyWebApi();

const useSpotifyInfo = (userInfoId: userInfoId) => {
  const { token } = useAppSelector((state) => state.playlist);
  const dispatch = useDispatch();
  useEffect(() => {
    spotifyApi.setAccessToken(token);
    dispatch(setAccesToken(token));
    spotifyApi.getUserPlaylists().then((data) => {
      const playlist = data.items;

      dispatch(setPlaylist(playlist));
    });
    if (userInfoId) {
      spotifyApi
        .getArtistAlbums(userInfoId)
        .then((data) => {
          dispatch(setArtistAlbum(data.items.slice(0, 1)));
          const name = data.items[0].artists[0].name;
          return name;
        })
        .then((name) => {
          spotifyApi.search(`${name}`, ["album"], {}).then(({ albums }) => {
            dispatch(setAlbum({ items: albums?.items }));
          });
          return name;
        })
        .then((name) => {
          spotifyApi.search(`${name}`, ["artist"]).then(({ artists }) => {
            const relatedArtist = artists?.items[0].id;
            const x = artists?.items[0];
            dispatch(setArtistInfo(x!));

            spotifyApi.getArtistRelatedArtists(relatedArtist!).then((data) => {
              dispatch(setRelated(data.artists));
            });
          });
        });

      spotifyApi
        .getArtist(userInfoId)
        .then((data) => {
          return data.id;
        })
        .then(() => {});
      spotifyApi.getArtistTopTracks(userInfoId, "").then(({ tracks }) => {
        const tracksArr = tracks.slice(0, 5);

        dispatch(setArtistTopPlayList(tracksArr));
      });
    }

    spotifyApi.getMySavedTracks().then(() => {
      //   console.log(data);
      // my like album
    });
  }, [token, dispatch, userInfoId]);
};

export default useSpotifyInfo;
