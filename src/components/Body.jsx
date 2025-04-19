import ResturantCardContainer from "./ResturantCard";
import restaurantList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {

  // const [resturantBigData, setResturantBigData] = useState(restaurantList)
  const arr = useState(restaurantList);
  // const [resturantBigData, setResturantBigData] = arr;
  const resturantBigData = arr[0];
  const setResturantBigData = arr[1];

  // let resturantBigData = [
  //   {
  //     id: "151656",
  //     name: "Dominos",
  //     cloudinaryImageId: "enj3srsnhbltbom2ovvh",
  //     costForTwo: "₹100 for two",
  //     cuisines: ["North Indian", "Chinese", "Fast Food", "Beverages"],
  //     avgRating: 1,
  //     parentId: "71556",
  //     avgRatingString: "1",
  //     totalRatingsString: "365",
  //   },
  //   {
  //     id: "151657",
  //     name: "MCD",
  //     cloudinaryImageId: "enj3srsnhbltbom2ovvh",
  //     costForTwo: "₹100 for two",
  //     cuisines: ["North Indian", "Chinese", "Fast Food", "Beverages"],
  //     avgRating: 4.8,
  //     parentId: "71556",
  //     avgRatingString: "4.3",
  //     totalRatingsString: "365",
  //   },
  // ];

  // const submitHandler = () => {
  //   resturantBigData.filter((res) => res.avgRating > 4);
  // };
  return (
    <div className="container">
      <div className="filter">
        <button
          onClick={() => {
            setResturantBigData(resturantBigData.filter((res) => res.info.avgRating > 4));
            console.log(resturantBigData);
          }}
          className="filter-btn"
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="content">
        {resturantBigData.map((resturant) => {
          return (
            <ResturantCardContainer
              key={resturant.info.id}
              resturantList={resturant}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
