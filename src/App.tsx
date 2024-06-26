import { Route, Routes } from "react-router";
import NavigationBar from "./components/NavigationBar";
import Home from "./page/Home";

import { useAppSelector } from "./slice/store";
import Player from "./components/Player";
import About from "./page/About";
import AboutPlayer from "./components/AboutPlayer";
import PlayerInfo from "./components/PlayerInfo";
import PlayerInfiId from "./components/PlayerInfiId";
import Album from "./page/Album";
import MyAlbums from "./components/MyAlbums";
import { useSpotifyApi } from "./hooks/useSpotifyApi";
import TrackPage from "./components/TrackPage";
import Track from "./components/Track";

function App() {
  const user = useAppSelector((state) => state.playlist);
  useSpotifyApi();

  return (
    <div className=" h-dvh w-full flex relative gap-2 bg-[#000000] ">
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="playerInfo" element={<PlayerInfo />} />
        <Route path="playerInfo/:id" element={<PlayerInfiId />} />
        <Route path="album" element={<Album />} />
        <Route path="album/:id" element={<MyAlbums />} />
        <Route path="tract" element={<TrackPage />} />
        <Route path="tract/:id" element={<Track />} />

        <Route path="/about">
          <Route index element={<About />} />
          <Route path=":id" element={<AboutPlayer />} />
        </Route>
      </Routes>
      <div className=" w-full absolute bottom-0 left-0 bg-stone-50">
        <Player accestoken={user.token ? user.token : null} />
      </div>
    </div>
  );
}

export default App;
