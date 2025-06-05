import React, { useEffect, useState } from "react";

const useRestaurentFetch = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2706759&lng=77.4630265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();

      const cards =
        data?.data?.cards[3].card?.card?.gridElements?.infoWithStyle
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

  useEffect(() => {
    fetchData();
  }, []);

  return {
    listOfRestaurants,
    filteredListOfRestaurants,
    setFilteredListOfRestaurants
  };
};

export default useRestaurentFetch;
