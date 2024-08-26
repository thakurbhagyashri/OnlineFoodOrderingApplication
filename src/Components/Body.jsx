import React, { useState, useEffect } from "react";
import { RestroCard } from "./RestroCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

export const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      console.log("Fetched Data:", json);

      const restaurantsData =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setRestaurantList(restaurantsData);
      setFilterRestaurant(restaurantsData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load data. Please try again later.");
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const filteredList = restaurantList.filter((res) =>
      res.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRestaurant(filteredList);
  };

  const handleTopRestaurants = () => {
    const filteredList = restaurantList.filter(
      (res) => res.info?.avgRating >= 4.5
    );
    setFilterRestaurant(filteredList);
  };

  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="body">
      <div className="row-container">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="btn" onClick={handleSearch}>
          Search
        </button>

        <div className="search">
          <button className="button1" onClick={handleTopRestaurants}>
            Top Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {filterRestaurant.length > 0 ? (
          filterRestaurant.map((restaurant) => (
            <Link
              to={`/restaurants/${restaurant?.info?.id}`}
              key={restaurant?.info?.id}
            >
              <RestroCard restaurant={restaurant} />
            </Link>
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};
