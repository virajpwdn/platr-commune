import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Shimmer from "../shimmer/Shimmer";
import { Link } from "react-router-dom";

interface cardItems {
  info?: {
    id?: string;
    name?: string;
    cloudinaryImageId?: string;
    locality?: string;
    areaName?: string;
    avgRating?: string;
    costForTwo?: string;
    cuisines?: string[];
    sla?: {
      deliveryTime?: string;
    };
    cta?: {
      link?: string;
    };
  };
}

interface ResturantDataFiltered {
  id: string;
  name: string;
  image: string;
  locality: string;
  areaName: string;
  rating: number | string;
  price: number;
  cuisines: string;
  deliveryTime: string | number;
  link: string;
}

const Resturants = () => {
  const [foodData, setFoodData] = useState<ResturantDataFiltered[]>();
  const [filteredData, setFilteredData] = useState<ResturantDataFiltered[]>();
  const [value, setValue] = useState("");

  useEffect(() => {
    generateData();
  }, []);

  const generateData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const data = await response.json();
      const cards =
        data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      const filteredData: ResturantDataFiltered[] = cards.map(
        (item: cardItems, index: number) => {
          const details = item?.info;

          if (!details) return { message: null };

          return {
            id: details.id || index, // Ensure unique ID
            name: details.name || "Unknown",
            image: `https://media-assets.swiggy.com/${details.cloudinaryImageId}`,
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
        }
      );
      setFoodData(filteredData);
      setFilteredData(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  const search = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
    if (!foodData) return;
    const filter = foodData?.filter((res) =>
      res.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filter);
  };

  return foodData?.length === undefined ? (
    <div className="p-24 flex gap-10 flex-wrap max-sm:p-5 max-sm:flex-col">
      {Array.from({ length: 6 }).map((_, idx) => {
        return <Shimmer key={idx} />;
      })}
    </div>
  ) : (
    <>
      <form
        onSubmit={search}
        className="flex justify-center items-center mt-5 gap-5"
      >
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="outline-none w-96 border border-zinc-400 px-5 py-2 rounded-md"
          type="text"
          placeholder="Search Your Favourite Food"
        />
        <button className="px-4 py-2 bg-[#FF5200] text-white rounded-md">
          Search
        </button>
      </form>
      <div className="flex gap-10 p-24 flex-wrap">
        {filteredData?.map((elem) => {
          return (
            <div key={elem.id} className="card-container bg-white">
              {<Link to={"/details/restaurant/"+elem.id}><Cards data={elem} /></Link>}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Resturants;
