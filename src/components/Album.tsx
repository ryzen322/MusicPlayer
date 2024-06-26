import { useState } from "react";
import { useAppSelector } from "../slice/store";
import ListAlbum from "./ListAlbum";

type Album = "album" | "single";

const Album = () => {
  const [albumState, setAlbumState] = useState<Album>("album");
  const { single, featuring } = useAppSelector((state) => state.playlist);

  function changeAlbum(album: Album): void {
    setAlbumState(album);
  }

  return (
    <div className=" w-full px-4 mb-2">
      <h1 className=" text-lg font-bold mb-2">Discography</h1>

      <div className=" flex items-center gap-2">
        <h1
          className={` px-2 py-1 ${
            albumState === "album"
              ? ` bg-white text-black`
              : `bg-[#232323]  text-white`
          } text-sm font-semibold cursor-pointer rounded-md`}
          onClick={() => changeAlbum("album")}
        >
          Album
        </h1>
        <h1
          className={` px-2 py-1 ${
            albumState === "single"
              ? ` bg-white text-black`
              : `bg-[#232323]  text-white`
          } text-sm font-semibold cursor-pointer rounded-md`}
          onClick={() => changeAlbum("single")}
        >
          Single
        </h1>
      </div>
      {albumState === "album" ? (
        <ListAlbum album={single} />
      ) : (
        <ListAlbum album={featuring} />
      )}
    </div>
  );
};

export default Album;
