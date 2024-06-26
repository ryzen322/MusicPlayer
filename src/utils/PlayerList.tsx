import AlbumSingeArtist from "../components/AlbumSingeArtist";
import PlayerInfiList from "../components/PlayerInfiList";

const PlayerList = () => {
  return (
    <div className=" flex flex-col mt-3 px-2 w-full overflow-hidden">
      <h1 className=" font-bold text-2xl mb-2">Popular</h1>

      <div className=" w-full overflow-x-scroll keep-scrolling rounded-sm flex flex-col relative gap-4 xl:flex-row ">
        <PlayerInfiList />
        <AlbumSingeArtist />
      </div>
    </div>
  );
};

export default PlayerList;
