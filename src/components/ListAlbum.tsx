import ListMusic from "../layouts/ListMusic";
import { SingleAlbum } from "../types";

const ListAlbum = (props: { album: SingleAlbum[] | undefined }) => {
  const { album } = props;

  return (
    <ul className=" my-4 w-full flex items-center overflow-x-scroll keep-scrolling snap-x snap-mandatory scroll-smooth">
      {album?.map((item) => (
        <ListMusic key={item.id} uri={item.uri} id={item.id}>
          <div className=" w-full h-[13rem]  rounded-md overflow-hidden relative">
            <img
              src={item.images[1].url}
              alt=""
              className=" w-full h-full object-cover relative"
            />
          </div>
          <div className=" flex flex-col gap-1">
            <h1 className=" text-sm font-medium truncate">{item.name}</h1>
            <p className=" text-xs text-stone-400 font-semibold">
              {item.release_date} • {item.type}
            </p>
          </div>
        </ListMusic>
      ))}
    </ul>
  );
};

export default ListAlbum;
