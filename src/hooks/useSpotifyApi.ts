import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { getHasParams } from "./getHasParams";
import { useAppDispatch } from "../slice/store";
import { setUser } from "../slice/userSlice";
import {
  setAccesToken,
  setLikes,
  // setPlay,
  setPlaylist,
  setTopPayList,
} from "../slice/playlistSlice";

import { setCategory } from "../slice/categorySlice";
import {
  setRecommendationIntl,
  setRecommendationLocal,
  setTopArtist,
} from "../slice/recommendationSlice";
import { redirect } from "react-router-dom";
const spotifyApi = new SpotifyWebApi();

export function useSpotifyApi() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { accesToken } = getHasParams();
    if (!accesToken) return;

    dispatch(setAccesToken(accesToken));

    spotifyApi.setAccessToken(accesToken);
    spotifyApi.getMe().then((user) => {
      const {
        display_name,
        country,
        email,
        href,
        id,
        product,
        type,
        uri,
        images,
        followers,
      } = user;
      dispatch(
        setUser({
          display_name,
          country,
          email,
          href,
          id,
          product,
          type,
          uri,
          images,
          followers,
        })
      );
    });
    spotifyApi.getUserPlaylists().then((data) => {
      const playlist = data.items;

      // my playlist navbar
      // console.log(playlist);
      dispatch(setPlaylist(playlist));
    });
    spotifyApi.getCategories({ limit: 30, offset: 1 }).then((data) => {
      // category
      const items = data.categories.items;

      dispatch(setCategory(items));
    });

    spotifyApi.getCategory("0JQ5DAqbMKFEZPnFQSFB1T").then(() => {
      // "0JQ5DAqbMKFEZPnFQSFB1T"
      // console.log(data);
    });
    spotifyApi.getCategoryPlaylists("0JQ5DAqbMKFEZPnFQSFB1T").then(() => {
      // console.log(data);
    });

    spotifyApi
      .getNewReleases({ limit: 10, offset: 1, country: "USA" })
      .then((data) => {
        // album

        dispatch(setRecommendationLocal(data.albums.items));
      });
    spotifyApi
      .getNewReleases({ limit: 10, offset: 5, country: "PH" })
      .then(() => {
        // album
        // console.log(data);
      });
    // "spotify:album:4dgpTxrCWYGt6xXLWdsFLv"
    // spotify:artist:1URnnhqYAYcrqrcwql10ft"
    // "spotify:album:7txGsnDSqVMoRl6RQ9XyZP"
    // "spotify:album:2RRYaYHY7fIIdvFlvgb5vq"

    // "spotify:playlist:55mK7gVpJqsu8BxEqL3XMk"
    spotifyApi.getPlaylist("55mK7gVpJqsu8BxEqL3XMk").then(() => {
      // get the playlist every userplayelist {}
      // console.log(data);
    });
    spotifyApi.getPlaylistTracks("55mK7gVpJqsu8BxEqL3XMk").then(() => {
      // get the playlist every userplayelist {} simple object
      // console.log(data);
    });
    spotifyApi.getPlaylistCoverImage("55mK7gVpJqsu8BxEqL3XMk").then(() => {
      // get the playlist every image of tracks {}
      // console.log(data);
    });
    spotifyApi.getFeaturedPlaylists().then((data) => {
      // Featured playlist
      dispatch(setRecommendationIntl(data.playlists.items));
    });
    spotifyApi.searchTracks("family affairs").then(() => {
      // console.log(data);
    });

    spotifyApi.getMyCurrentPlayingTrack().then(function () {
      // currently playing
      // console.log(data);
    });
    spotifyApi.getMyRecentlyPlayedTracks().then(() => {
      // recentplayed
      // console.log();
      // console.log(data.items[data.items.length - 1]);
      // dispatch(setPlay([data.items[data.items.length - 1].track.uri]));
    });
    spotifyApi.getMyTopTracks().then(function (data) {
      // console.log(data.items[0]);
      dispatch(setTopPayList(data.items));
    });
    spotifyApi.getMyTopArtists().then(function (data) {
      // My Top Playlist
      dispatch(setTopArtist(data.items));
    });

    spotifyApi.getMySavedTracks().then((data) => {
      dispatch(setLikes(data.items));
    });

    // try to fetch this id "spotify:playlist:55mK7gVpJqsu8BxEqL3XMk"

    redirect("/");
  }, [dispatch]);
}
