import { useParams } from "react-router";
import { useSpotifyPlayList } from "../hooks/useSpotifyPlayList";

import { Menu } from "./Menu";

import PlayerLayout from "../layouts/PlayerLayout";
import { RecommendationTrack } from "./RecommendationTrack";
import { TractMenu } from "./TractMenu";

const Track = () => {
  const { id } = useParams();

  useSpotifyPlayList(id);

  return (
    <PlayerLayout className=" w-full">
      <main className=" w-full pr-2 pt-2 rounded-md font-Roboto keep-scrolling">
        <div className=" w-full h-[14rem] bg-stone-700 rounded-t-md flex flex-col relative p-3 lg:h-[18rem]">
          <Menu />
        </div>
        <div className=" mb-[5rem] px-3">
          <TractMenu />
        </div>
        <RecommendationTrack />
      </main>
    </PlayerLayout>
  );
};

export default Track;
