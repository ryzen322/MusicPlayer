import { useParams } from "react-router";
import useSpotifyAlbum from "../hooks/useSpotifyAlbum";
import PlayerLayout from "../layouts/PlayerLayout";

import Components from "./album/Components";

const MyAlbums = () => {
  const { id } = useParams();

  useSpotifyAlbum(id!);

  return (
    <PlayerLayout className="p-0 mr-2 rounded-md mt-2 font-Roboto w-full">
      {<Components />}
    </PlayerLayout>
  );
};

export default MyAlbums;
