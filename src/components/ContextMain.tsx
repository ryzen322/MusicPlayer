import ScrollComponents from "../layouts/ScrollComponents";
import { useAppSelector } from "../slice/store";
import Catergory from "./Catergory";
import Featured from "./Featured";
import MyPlaylist from "./MyPlaylist";
import Recomendation from "./Recomendation";
import TrackList from "./TrackList";

const ContextMain = () => {
  const category = useAppSelector((state) => state.category);
  const { topArtist } = useAppSelector((state) => state.recommendation);

  const [itemFirst, itemSecond] = [
    category?.item?.slice(0, 15),
    category?.item?.slice(15, 30),
  ];

  let context;
  if (category.item.length <= 0) {
    context = <>loading</>;
  } else {
    context = (
      <>
        <Catergory itemData={itemFirst} title="New release" />
        <Catergory itemData={itemSecond} title="For you" />
      </>
    );
  }

  return (
    <main className=" w-full flex flex-col mt-4 font-Roboto">
      <div className=" flex justify-between">
        <h1 className=" text-2xl font-semibold">Tailored for you</h1>
      </div>

      <div className=" flex gap-2 items-center mt-4 text-xs font-medium">
        <div className="py-1 px-2  border rounded-lg">
          <h1>New</h1>
        </div>
        <div className="py-1 px-2  border rounded-lg">
          <h1>Album</h1>
        </div>
        <div className="py-1 px-2  border rounded-lg">
          <h1>PlayList</h1>
        </div>
      </div>

      <MyPlaylist />

      <TrackList />

      <Featured title="Top Artist" items={topArtist} />
      <Feat />

      <Recomendation />

      {context}
    </main>
  );
};

export function Feat() {
  const { local } = useAppSelector((state) => state.recommendation);

  return (
    <div className=" mt-4 font-Roboto">
      <h1 className=" text-lg font-bold mb-6">Philippine trends</h1>
      <ScrollComponents>
        {local.map((item) => (
          <li
            key={item.id}
            className=" min-h-[16.5rem] max-h-[16.5rem] min-w-[185px] max-w-[185px] snap-start  rounded-md flex flex-col gap-3 p-3 bg-[#282828]/15"
          >
            <div className=" h-[152px] min-h-[152px] max-h-[152px] rounded-sm w-full overflow-hidden ">
              <img
                src={item.images[0].url}
                alt=""
                className=" w-full h-full "
              />
            </div>
            <p className=" text-sm font-medium text-stone-300 truncate ">
              {item.name}
            </p>
            <p className=" text-[#a7a7a7] text-xs mt-auto">
              {item.description}
            </p>
          </li>
        ))}
      </ScrollComponents>
    </div>
  );
}

export default ContextMain;
