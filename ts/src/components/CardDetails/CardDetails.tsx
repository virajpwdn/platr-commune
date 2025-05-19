import { useEffect, useState } from "react";

interface PropsData {
  name: string;
  areaName: string;
  costForTwoMessage: string;
  cuisines: Array<string>;
  id: string;
}

const RatingModel = (props: PropsData) => {
  const { name, areaName, costForTwoMessage, cuisines, id, avgRating, city } =
    props.resInfoProp;
    // console.log(props.resInfoProp);
  return (
    <div className="bg-purple-500 p-5 rounded-lg bg-gradient-to-b from-white via-zinc-200 to-slate-300">
      <div className="bg-white p-10 shadow-lg rounded-lg">
        <div className="flex gap-3 items-center relative">
          <h4>
            <span className="pr-2">⭐️</span>
            {avgRating}
          </h4>
          <p>•</p>
          <h4>{costForTwoMessage}</h4>
        </div>

        <div>
          <p>cusines</p>
        </div>
        <div>
          <ul className="list-disc">
            <li>Outlet {areaName}</li>
            <li>{city}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const CardDetails = () => {
  const [resInfo, setResInfo] = useState({});
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=28405&catalog_qa=undefined&submitAction=ENTER"
      );

      const data = await response.json();
      console.log(data.data?.cards[2]);
      setResInfo(data.data?.cards[2]?.card?.card?.info);
      //   console.log(data.data.cards[2].card.card.info);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[60%] m-auto">
      <h1 className="text-3xl py-8 font-bold">Title of Restaurent</h1>
      <RatingModel resInfoProp={resInfo} />
    </div>
  );
};

export default CardDetails;
