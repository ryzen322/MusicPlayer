import BoxComponents from "../layouts/BoxComponents";
import ScrollComponents from "../layouts/ScrollComponents";
import { CategoryPlayList } from "../slice/categorySlice";

interface ItemCateg {
  itemData: CategoryPlayList[];
  title: string;
}

const Catergory = ({ itemData, title }: ItemCateg) => {
  return (
    <div className="w-full mt-7">
      <h1 className=" mb-4 text-lg font-semibold">{title}</h1>
      <ScrollComponents>
        {itemData.map((data) => (
          <BoxComponents key={data.id}>
            <img
              src={data.icons[0].url}
              alt={data.icons[0].url}
              className=" w-full h-full object-cover scale-110"
            />
          </BoxComponents>
        ))}
      </ScrollComponents>
    </div>
  );
};

export default Catergory;
