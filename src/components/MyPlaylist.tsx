import { useAppDispatch, useAppSelector } from "../slice/store";
import { FaPlay } from "react-icons/fa";
import { setPlay } from "../slice/playlistSlice";

const MyPlaylist = () => {
  const item = useAppSelector((state) => state.playlist);
  const { playlistUri } = useAppSelector((state) => state.playlist);
  const dispatch = useAppDispatch();
  const data = item?.playList?.filter((data) => {
    return data.images;
  });

  function currentPlaying(uri: string): boolean {
    const current = playlistUri[0] === uri;
    return current;
  }

  function setPlaying(uri: string[]) {
    dispatch(setPlay(uri));
  }
  return (
    <div className=" mt-6 font-Roboto">
      <h1 className=" text-lg font-bold mb-5">My Playlist</h1>
      <ul className=" grid grid-cols-2 gap-2 lg:grid-cols-3 ">
        {data.map((value) => (
          <li
            key={value.id}
            className=" h-14 bg-[#31393E] rounded-md relative flex items-center gap-2 overflow-hidden cursor-pointer group md:h-20"
          >
            <div className=" h-full w-14 md:w-20">
              <img
                src={value.images[0].url}
                alt=""
                className=" w-full h-full object-cover"
              />
            </div>
            <h1 className=" text-xs font-semibold relative md:text-base">
              {value.name}
            </h1>

            {currentPlaying(value.uri) ? (
              <div className=" h-4 w-[1.5rem] absolute right-1 pr-1">
                <div className=" h-full w-full flex justify-center gap-[2px] rotate-180 ">
                  <div className=" animate2 "></div>
                  <div className=" animate3 "></div>
                  <div className=" animate1  "></div>
                  <div className="animate4 "></div>
                  <div className=" animate3 "></div>
                </div>
              </div>
            ) : (
              <div
                className=" h-10 w-10 rounded-full bg-[#1db954] absolute  top-20 group-hover:top-2 hover:scale-105 transition-all decoration-cyan-300 ease-in right-2 flex justify-center items-center md:group-hover:top-[25%]"
                onClick={() => setPlaying([value.uri])}
              >
                <FaPlay className=" text-black" />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyPlaylist;
