import ScrollComponents from "../layouts/ScrollComponents";
import { FeatureObj } from "../types";
import FeaturedComponents from "./FeaturedComponents";

interface FeatureC {
  title: string;
  items: FeatureObj[];
}

const Featured = ({ title, items }: FeatureC) => {
  return (
    <div className=" mt-6">
      <h1 className=" text-lg font-bold mb-6">{title}</h1>
      <ScrollComponents>
        {items.map((data) => (
          <FeaturedComponents
            id={data.id}
            key={data.id}
            uri={data.uri}
            name={data.name}
            image={data.images[0].url}
          />
        ))}
      </ScrollComponents>
    </div>
  );
};

export default Featured;
