import { Outlet } from "react-router";
import PlayerLayout from "../layouts/PlayerLayout";

const PlayerInfo = () => {
  return <PlayerLayout className=" w-full">{<Outlet />}</PlayerLayout>;
};

export default PlayerInfo;
