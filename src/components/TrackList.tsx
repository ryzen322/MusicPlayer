import { IoMdTime } from "react-icons/io";
import TrackRow from "./TrackRow";
import { useAppSelector } from "../slice/store";

const TrackList = () => {
  const { topPlayList } = useAppSelector((state) => state.playlist);
  return (
    <div className=" mt-6 font-Roboto min-w-[15rem] overflow-x-scroll keep-scrolling">
      <div className=" flex justify-between items-center  mb-5">
        <h1 className=" text-lg font-bold ">Most Played</h1>
      </div>

      <div className=" min-h-[15rem] max-h-[15rem] overflow-scroll keep-scrolling max-w-[40rem] min-w-[40rem]  md:max-w-full md:min-w-full md:min-h-[35rem] md:max-h-[35rem]">
        <table className="table-auto text-left w-full  ">
          <thead>
            <tr className=" text-sm text-stone-600 ">
              <th className=" flex gap-2 mb-3 px-2">
                <p className="  w-[1.75rem] text-center">#</p>
                <p>Title</p>
              </th>
              <th>Artist</th>
              <th>
                <IoMdTime />
              </th>
            </tr>
          </thead>
          <tbody>
            {topPlayList.map((data, index) => (
              <TrackRow
                key={data.id}
                title={data.name}
                track_number={index + 1}
                artist={data.artists[0].name}
                image={data.album.images[0].url}
                duration={data.duration_ms}
                uri={data.uri}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrackList;
