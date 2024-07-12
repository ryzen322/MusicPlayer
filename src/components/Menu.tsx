import { useAppSelector } from "../slice/store";
import { durationOfAlbum, useTotalMusic } from "../utils";
import { TrackHeader } from "./Skelaton-UI/Track-ui";

export const Menu = () => {
  const { track } = useAppSelector((item) => item.tract);

  const x = track?.tracks.items.map((item) => item.track.duration_ms);

  const { songsDuration, totalSong } = useTotalMusic(x);

  if (!track) {
    return <TrackHeader />;
  }

  return (
    <>
      <div className=" w-full h-[14rem] bg-stone-700 rounded-t-md flex flex-col relative p-3 lg:h-[18rem]">
        <div className=" h-[2rem] w-full  flex justify-between sm:h-[2.5rem] ">
          <div className=" h-full w-[2rem] rounded-full bg-green-400 flex items-center justify-center sm:w-[2.5rem] "></div>
          <div className=" flex gap-2">
            <div className=" h-full w-[2rem] rounded-full bg-green-400 flex items-center justify-center sm:w-[2.5rem] "></div>
            <div className=" h-full w-[2rem] rounded-full bg-green-400 flex items-center justify-center sm:w-[2.5rem] "></div>
            <div className=" h-full w-[2rem] rounded-full bg-green-400 flex items-center justify-center sm:w-[2.5rem] "></div>
          </div>
        </div>
        <div className=" flex gap-2 mt-auto sm:gap-4">
          <div className=" h-[7.5rem] w-[8rem] flex-shrink-0 bg-stone-900 rounded-md shadow-black sm:h-[9rem] sm:w-[9rem] lg:h-[12rem] lg:w-[12rem]">
            {track.images && (
              <img
                src={track.images[1].url}
                alt=""
                className=" w-full h-full rounded-md object-cover"
              />
            )}
          </div>
          <div className=" flex flex-col justify-between">
            <h1 className=" text-xs font-semibold text-white sm:text-sm lg:text-lg">
              Public PlayList
            </h1>
            <h1 className=" text-white font-bold text-4xl sm:text-6xl lg:text-8xl">
              {track.name}
            </h1>
            <div className=" flex gap-1 items-center flex-wrap sm:gap-2">
              <h1 className=" text-white font-bold text-xs sm:text-sm">
                {track.owner.display_name} ·
              </h1>
              <p className=" text-white/70 text-xs font-semibold  sm:text-sm">
                {totalSong} songs, {durationOfAlbum(songsDuration)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
