import { useParams } from "react-router";
import { useSpotifyPlayList } from "../hooks/useSpotifyPlayList";

import { Menu } from "./Menu";

import { TractMenu } from "./TractMenu";

const Track = () => {
  const { id } = useParams();
  console.log(id);
  useSpotifyPlayList(id);

  return (
    <main className=" w-full pr-2 pt-2 rounded-md font-Roboto keep-scrolling">
      <div className=" w-full h-[14rem] bg-stone-700 rounded-t-md flex flex-col relative p-3 lg:h-[18rem]">
        <Menu />
      </div>
      <TractMenu />
    </main>
  );
};

export default Track;
