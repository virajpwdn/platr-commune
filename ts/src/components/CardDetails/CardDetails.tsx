import { useEffect, useState } from "react";
import Shimmer from "../shimmer/Shimmer";
import { BASE_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";
import ResCategory from "./ResCategory";

interface PropsData {
  name: string;
  areaName: string;
  costForTwoMessage: string;
  cuisines: Array<string>;
  id: string;
  totalRatingsString: string;
  availabilityServiceabilityMessage: string;
  avgRating: string;
}

interface PropsWrapper {
  resInfoProp: PropsData;
  // category: Array<>
}

interface card {
  card: {
    card: {
      ["@type"]: string;
    };
  };
}

interface RestaurantCategories {
  card: Array<card>;
}

const RatingModel = (props: PropsWrapper) => {
  const {
    areaName,
    costForTwoMessage,
    cuisines,
    avgRating,
    totalRatingsString,
    availabilityServiceabilityMessage,
  } = props.resInfoProp;

  const category = props.category;
  console.log("category", category);

  return (
    <>
      <div className="bg-purple-500 p-5 rounded-lg bg-gradient-to-b from-white via-zinc-200 to-slate-300">
        <div className="bg-white p-10 shadow-lg rounded-lg">
          <div className="flex gap-3 items-center relative">
            <h4>
              <span className="pr-2">⭐️</span>
              {avgRating + "(" + totalRatingsString + ")"}
            </h4>
            <p>•</p>
            <h4>{costForTwoMessage}</h4>
          </div>

          <div>
            <p>{cuisines ? Object.values(cuisines).join(", ") : ""}</p>
          </div>
          <div>
            <ul className="list-disc ml-4">
              <li>Outlet {areaName}</li>
              <li>{availabilityServiceabilityMessage}</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Accordian */}
      <div className="mt-10">
        {category &&
          category.map((category, idx) => {
            return <ResCategory key={idx} resCategoryData={category?.card?.card} />;
          })}
      </div>
    </>
  );
};

const CardDetails = () => {
  const [resInfo, setResInfo] = useState<PropsData | null>(null);
  const [categoriesData, setCategoriesData] = useState([]);
  const { resId } = useParams();
  const [showItems, setShowItems] = useState<boolean>(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(BASE_URL + "restaurantId=" + resId);

        const data = await response.json();
        // console.log(data);
        // console.log(
        //   data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        // );
        setResInfo(data?.data?.cards[2]?.card?.card?.info);
        setCategoriesData(
          data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        );
      } catch (error) {
        console.log(error);
      }
    };

    if (resId) {
      getData();
    }
  }, [resId]);

  // console.log(categoriesData[3]?.Card)÷÷??

  const categories =
    categoriesData &&
    categoriesData.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories", categories[5]?.card?.card?.title);
  return (
    <div className="max-w-[60%] m-auto">
      {resInfo ? (
        <>
          <h1 className="text-3xl py-8 font-bold">{resInfo.name}</h1>
           <RatingModel resInfoProp={resInfo} category={categories} />
        </>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default CardDetails;
