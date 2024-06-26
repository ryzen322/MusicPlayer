import BoxComponents from "../layouts/BoxComponents";
import ScrollComponents from "../layouts/ScrollComponents";
import { useAppSelector } from "../slice/store";

const Recomendation = () => {
  const recomended = useAppSelector(
    (state) => state.recommendation.international
  );

  let context;
  if (recomended.length <= 0) {
    context = <>Loading...</>;
  } else {
    context = (
      <ScrollComponents>
        {recomended?.slice(0, 10)?.map((data) => (
          <BoxComponents key={data.id}>
            {
              <img
                alt={data.album_type}
                src={data.images[2].url}
                className=" w-full h-full object-cover"
              />
            }
          </BoxComponents>
        ))}
      </ScrollComponents>
    );
  }

  return (
    <div className=" mt-10 flex flex-col gap-3">
      <h1 className=" text-lg font-bold">Recommendation</h1>
      {context}
    </div>
  );
};

export default Recomendation;
