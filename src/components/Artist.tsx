import ListMusic from "../layouts/ListMusic";
import { useAppSelector } from "../slice/store";

const Artist = () => {
  const { related } = useAppSelector((state) => state.category);
  return (
    <div className=" my-5 px-4">
      <h1 className=" text-lg font-bold mb-2">Related Artist</h1>

      <ul className=" my-4 w-full flex items-center overflow-x-scroll keep-scrolling snap-x snap-mandatory scroll-smooth">
        {related.map((item) => (
          <ListMusic key={item.id} uri={item.uri} id={item.id}>
            <div className=" w-full h-[13rem]  rounded-md overflow-hidden relative">
              <img
                src={item.images[1].url}
                alt=""
                className=" w-full h-full object-cover relative"
              />
            </div>
            <div className=" flex flex-col ">
              <h1 className=" text-lg font-semibold ">{item.name}</h1>
              <p className=" text-xs truncate text-stone-400 font-semibold">
                <span>Genres</span>: {item.genres.map((gen) => gen)}
              </p>
            </div>
          </ListMusic>
        ))}
      </ul>
    </div>
  );
};

export default Artist;
