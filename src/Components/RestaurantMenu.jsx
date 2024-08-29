import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import MENU_URL from "../Utils/constants";
import Shimmer2 from "./Shimmer2";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
export const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();//its a hook/utility function
  console.log(resId);
 const resInfo= useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer2 />;

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
