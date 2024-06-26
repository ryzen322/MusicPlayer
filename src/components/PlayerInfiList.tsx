import { useAppSelector } from "../slice/store";

import ListPlayerTractks from "./ListPlayerTractks";

const PlayerInfiList = () => {
  const { topArtistPlayList } = useAppSelector((state) => state.playlist);

  return (
    <ul className=" max-w-[35rem] min-w-[35rem] flex flex-col rounded-sm gap-1 h-[300x] relative  py-5  md:max-w-[40rem] lg:max-w-full xl:max-w-[60%] xl:min-w-[60%]">
      {topArtistPlayList.map((item, index) => (
        <ListPlayerTractks
          key={item.id}
          image={item.album.images[2].url}
          time={item.duration_ms}
          title={item.name}
          name={item.artists[0].name}
          index={index + 1}
          artists={item.artists}
        />
      ))}
    </ul>
  );
};

export default PlayerInfiList;
