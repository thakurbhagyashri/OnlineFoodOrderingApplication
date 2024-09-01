import React, { useState, useEffect } from "react";
import RestroCard, { withPromotedLabel } from "./RestroCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../Utils/useOnlineStatus";
import useFetchRestaurantsList from "../Utils/useFetchRestaurantsList";

export const Body = () => {
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const { restaurantList, loading, error } = useFetchRestaurantsList();//custom hooks
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestroCard);

  useEffect(() => {
    setFilterRestaurant(restaurantList); // Initialize filterRestaurant with the fetched data
  }, [restaurantList]);

  const handleSearch = () => {
    const filteredList = restaurantList.filter((res) =>
      res.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRestaurant(filteredList);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You are offline, please check your internet connection</h1>;
  }

  const handleTopRestaurants = () => {
    const filteredList = restaurantList.filter(
      (res) => res.info?.avgRating >= 4.5
    );
    setFilterRestaurant(filteredList);
  };

  const maxRate = (costForTwo) => {
    if (typeof costForTwo === "string") {
      const numericValue = parseFloat(costForTwo.replace(/[^\d.]/g, ""));
      return isFinite(numericValue) ? numericValue : 0;
    }
    return 0;
  };

  const handleByRate = () => {
    const maxCost = 300; // Filter for restaurants with costForTwo less than 300
    const filteredList = restaurantList.filter((res) => {
      const cost = maxRate(res.info?.costForTwo);
      return cost < maxCost;
    });
    setFilterRestaurant(filteredList);
  };

  const handleByLocation = () => {
    const locPune = restaurantList.filter(
      (res) =>
        res.info?.locality.toLowerCase() === "hinjewadi" &&
        res.info?.avgRating > 4
    );
    setFilterRestaurant(locPune);
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
          className="
            p-3
            m-2
            border
            border-gray-300
            rounded-lg
            shadow-sm
            focus:outline-none
            focus:ring-2
            focus:ring-slate-400
            focus:border-slate-500
            transition
            duration-300
            ease-in-out
            bg-white
            text-gray-700
            placeholder-gray-500
            w-full
            max-w-md
          "
          placeholder="Search here..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="
            px-4
            py-2
            bg-orange-500
            text-white
            font-semibold
            rounded-lg
            shadow-md
            hover:bg-orange-600
            focus:outline-none
            focus:ring-2
            focus:ring-orange-300
            transition
            duration-300
            ease-in-out
          "
          onClick={handleSearch}
        >
          Search
        </button>

        <button
          className="
            m-2
            px-4
            py-2
            bg-orange-500
            text-white
            font-semibold
            rounded-lg
            shadow-md
            hover:bg-orange-600
            focus:outline-none
            focus:ring-2
            focus:ring-orange-300
            transition
            duration-300
            ease-in-out
          "
          onClick={handleTopRestaurants}
        >
          Top Restaurants
        </button>

        <button
          className="
            m-2
            px-4
            py-2
            bg-orange-500
            text-white
            font-semibold
            rounded-lg
            shadow-md
            hover:bg-orange-600
            focus:outline-none
            focus:ring-2
            focus:ring-orange-300
            transition
            duration-300
            ease-in-out
          "
          onClick={handleByRate}
        >
          Rs.200-Rs.300
        </button>
        <button
          className="
            m-2
            px-4
            py-2
            bg-orange-500
            text-white
            font-semibold
            rounded-lg
            shadow-md
            hover:bg-orange-600
            focus:outline-none
            focus:ring-2
            focus:ring-orange-300
            transition
            duration-300
            ease-in-out
          "
          onClick={handleByLocation}
        >
          Best Hinjewadi Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filterRestaurant.length > 0 ? (
          filterRestaurant.map((restaurant) => (
            <Link
              to={`/restaurants/${restaurant?.info?.id}`}
              key={restaurant?.info?.id}
            >
              {restaurant?.info?.avgRating > 4 ? (
                <RestaurantCardPromoted restaurant={restaurant} />
              ) : (
                <RestroCard restaurant={restaurant} />
              )}
            </Link>
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};
