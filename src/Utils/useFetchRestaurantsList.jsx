import { useEffect, useState } from "react";

const useFetchRestaurantsList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { restaurantList, loading, error };
};

export default useFetchRestaurantsList;