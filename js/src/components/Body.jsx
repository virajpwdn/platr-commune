import React, { useEffect, useState } from "react";
import RestaurantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);

  const [serachData, setSerachData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2706759&lng=77.4630265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();

      const cards =
        data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []; // Ensure it's always an array

      // Transform API data into expected format
      const transformedData = cards
        .map((item, index) => {
          const details = item?.info; // Extract restaurant details

          if (!details) return null; // Skip invalid data

          return {
            id: details.id || index, // Ensure unique ID
            name: details.name || "Unknown",
            image:
              `https://media-assets.swiggy.com/${details.cloudinaryImageId}` ||
              "",
            locality: details.locality || "Unknown Area",
            areaName: details.areaName || "Unknown",
            rating: details.avgRating || "No Rating",
            price: details.costForTwo || "N/A",
            cuisines: details.cuisines
              ? details.cuisines.join(", ")
              : "No Cuisines",
            deliveryTime: details.sla?.deliveryTime || "N/A",
            link: details.cta?.link || "#", // Default link if missing
          };
        })
        .filter(Boolean); // Remove null values

      setListOfRestaurants(transformedData); // Update state
      setFilteredListOfRestaurants(transformedData); // Update list of restaurant
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // We are getting an error when we call this api from our local host because of cors policy
  // So who is actually blocking us is browser our browser is not allowing us to call swiggy api
  // We can bypass this using cors chrome extension

  //Conditional Rendering is rendering something based on some condition

  return listOfRestaurants.length === 0 ? (
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
        {filteredListOfRestaurants.map((item) => {
          return <RestaurantCard key={Math.random()} resData={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
