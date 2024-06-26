import { Outlet } from "react-router";
import PlayerLayout from "../layouts/PlayerLayout";

const TrackPage = () => {
  return <PlayerLayout className=" w-full">{<Outlet />}</PlayerLayout>;
};

export default TrackPage;
