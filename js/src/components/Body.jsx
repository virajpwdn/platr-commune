import React, { useEffect, useState } from "react";
import RestaurantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import useRestaurentFetch from "../utils/hooks/useRestaurentFetch";

const Body = () => {
  // const [listOfRestaurants, setListOfRestaurants] = useState([]);
  // const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);

  const [serachData, setSerachData] = useState("");

  const {
    listOfRestaurants,
    filteredListOfRestaurants,
    setFilteredListOfRestaurants,
  } = useRestaurentFetch();

  // setListOfRestaurants(transformedData); // Update state
  // setFilteredListOfRestaurants(transformedData); // Update list of restaurant

  // We are getting an error when we call this api from our local host because of cors policy
  // So who is actually blocking us is browser our browser is not allowing us to call swiggy api
  // We can bypass this using cors chrome extension

  //Conditional Rendering is rendering something based on some condition
  console.log(listOfRestaurants)
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div>
        <div className="flex justify-between items-center px-5">
          <div className="flex gap-5 text-xl w-2/4 justify-between py-2 px-2 rounded-md bg-gray-300">
            <input
              type="text"
              placeholder="Search Food or Restaurant"
              className="w-full border-none px-2 outline-none"
              value={serachData}
              onChange={(e) => {
                setSerachData(e.target.value);
              }}
            />
            <button
              className="bg-blue-500 rounded-md text-white px-2 py-1"
              onClick={() => {
                const filter = listOfRestaurants.filter((res) =>
                  res.name.toLowerCase().includes(serachData.toLowerCase())
                );

                setFilteredListOfRestaurants(filter);
              }}
            >
              Search
            </button>
          </div>
          <button className="m-5 px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700">
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {filteredListOfRestaurants?.map((item) => {
          return <RestaurantCard key={Math.random()} resData={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
