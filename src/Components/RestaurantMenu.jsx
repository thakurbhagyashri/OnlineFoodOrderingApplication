import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import MENU_URL from "../Utils/constants";
import Shimmer2 from "./Shimmer2";
export const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenue();
  }, []);
  const fetchMenue = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${resId}`
    );
    const json = await data.json();
    console.log("json" + json);
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer2/>;

  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h3>Cost For Two: {costForTwo}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((i) => (
          <li key={i.card.info.id}>
            {i.card.info.name}- Rs.
            {i.card.info.price / 100 || i.card.info.defaultPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};
