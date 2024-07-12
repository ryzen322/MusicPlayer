import { useState } from "react";
import { useAppSelector } from "../slice/store";
import { Tracks } from "../types";
import { TractList } from "./TractList";
import usePlay from "../utils";

export const TrackListMenu = ({ track }: { track: Tracks }) => {
  const { playlistUri } = useAppSelector((state) => state.playlist);
  const { playMusic } = usePlay();
  const [uriId] = playlistUri;
  const [activeItem, setActiveItem] = useState<string>(uriId);

  const playMusicHandler = (uri: string) => {
    playMusic([uri]);
    setActiveItem(uri);
  };

  return (
    <div className=" w-full overflow-x-scroll mt-6 keep-scrolling ">
      <ul className=" w-[50rem] flex flex-col gap-2 md:w-full">
        <li className="  w-full   grid grid-cols-5 text-stone-400 text-xs font-semibold gap-6 border-b border-b-stone-700">
          <div className=" h-[2rem] col-span-2 flex items-center pl-6  gap-3 ">
            <p>#</p>
            <h1>Title</h1>
          </div>
          <div className=" h-[2rem]  flex items-center">
            <h1>Album</h1>
          </div>
          <div className=" h-[2rem]  flex items-center justify-center">
            <h1>Date Added</h1>
          </div>
          <div className=" h-[2rem]  flex items-center justify-center">
            <h1>Time</h1>
          </div>
        </li>
        {track?.tracks.items.map((item, index) => (
          <TractList
            key={item.track.id}
            date={item.added_at}
            time={item.track.duration_ms}
            title={item.track.name}
            number={index + 1}
            feat={item.track.artists?.map((list) => list.name)}
            image={item.track.album?.images[2].url}
            album={item.track.album?.name}
            uri={item.track.uri}
            activeItem={activeItem === item.track.uri}
            playMusicHandler={playMusicHandler}
          />
        ))}
      </ul>
    </div>
  );
};
