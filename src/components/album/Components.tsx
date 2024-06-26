import { Header } from "./Header";
import { Music } from "./Music";
const Components = () => {
  return (
    <div className=" h-full font-Roboto ">
      <main className=" w-[45rem] h-full md:w-full">
        <div className=" w-full flex flex-col">
          <Header />
          <Music />
        </div>
      </main>
    </div>
  );
};

export default Components;
