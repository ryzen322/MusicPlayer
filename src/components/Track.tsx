import { useParams } from "react-router";

const Track = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Track</div>;
};

export default Track;
