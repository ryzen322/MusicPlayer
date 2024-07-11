import { useAppSelector } from "../slice/store";
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

export const useSpotifyRecommend = () => {
  const { token } = useAppSelector((state) => state.playlist);

  useEffect(() => {
    spotifyApi.setAccessToken(token);

    spotifyApi
      .getRecommendations({
        min_energy: 0.4,
        seed_artists: ["6mfK6Q2tzLMEchAr0e9Uzu", "4DYFVNKZ1uixa6SQTvzQwJ"],
        min_popularity: 50,
      })
      .then(
        function (data) {
          console.log(data);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );

    return () => {};
  }, [token]);
};
