import React, { useState, useEffect } from "react";
import { RestroCard } from "./RestroCard";
import resList from "../Utils/mockData";
import { Link } from "react-router-dom";

export const Body = () => {
  const { restaurants } = resList;
  const [restorantList, setRestroList] = useState(restaurants);
  const [filterRestro, setFilterRestro] = useState(restaurants);
  const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   console.log("useEffect Call");
  //   fetchData();
  // }, []);

  // const fetchData = async () => {

  //     const data = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //     );

  //     const json = await data.json();
  //     console.log(json);
  //      const restaurantsData = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  //     setRestroList(restaurantsData);
  //     setFilterRestro(restaurantsData);

  // };

  // if (restorantList.length === 0) {
  //   return <Shimmer />;
  //   console.log("loading call");

  // }
  // else{
  //   console.log("data displayed");

  // }

  return (
    <div className="body">
      <input
        type="text"
        className="search-box"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="btn"
        onClick={() => {
          const filterRestro = restorantList.filter((res) =>
            res.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilterRestro(filterRestro);
        }}
      >
        Search
      </button>
      <div className="search">
        <button
          className="button1"
          onClick={() => {
            const filteredList = restorantList.filter((res) => res.rating >= 3);
            setRestroList(filteredList);
          }}
        >
          Top Restorant
        </button>
      </div>
      <div className="res-container">
        {filterRestro.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.id}>
            {" "}
            <RestroCard key={restaurant.id} restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
