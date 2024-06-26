import { Outlet } from "react-router";
import PlayerLayout from "../layouts/PlayerLayout";

const PlayerInfo = () => {
  return <PlayerLayout className="">{<Outlet />}</PlayerLayout>;
};

export default PlayerInfo;
