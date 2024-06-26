import { useAppSelector } from "../slice/store";

const AlbumSingeArtist = () => {
  const [album] = useAppSelector((state) => state.playlist.artistAlbum);

  return (
    <div className=" w-full flex flex-col pl-4 pb-5 gap-4 lg:flex-1">
      <h1 className=" font-bold text-xl ">Artist pick</h1>
      <div className=" flex gap-3">
        <div className=" max-w-[6rem] max-h-[6rem] bg-stone-700 rounded-sm overflow-hidden relative">
          <img
            src={album?.images[1].url}
            alt=""
            className=" w-full h-full rounded-sm object-cover"
          />
        </div>
        <div className=" flex flex-col gap-1">
          <p className=" text-sm font-bold leading-4">{album?.name}</p>
          <div className=" text-xs font-semibold text-stone-400 flex flex-col">
            <p className=" flex gap-2">
              <span className=" text-white">Artist :</span>
              {album?.artists[0].name}
            </p>
            <p className=" flex gap-2">
              <span className=" text-white">Release date :</span>
              {album?.release_date}
            </p>
            <p className=" flex gap-2">
              <span className=" text-white">Total tracks :</span>{" "}
              {album?.total_tracks}
            </p>
            <p className=" flex gap-2">
              <span className=" text-white">Type :</span>
              {album?.type}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumSingeArtist;
