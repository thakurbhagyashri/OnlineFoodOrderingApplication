import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import MENU_URL from "../Utils/constants";
import Shimmer2 from "./Shimmer2";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestroCategory from "./RestroCategory";
export const RestaurantMenu = () => {
 const [showIndex,setShowIndex]=useState(null);
  // const handleClick=()=>
  // {
  //   console.log("Clicked");
  //   setShowItems(!showItems);
  // }
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();//its a hook/utility function
  console.log(resId);
 const resInfo= useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer2 />;

  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);
  console.log("recomended",resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log("cate:",categories);

  return (
    <div className=" text-center">
     <div className="font-bold text-center block text-xl "> <h2>{name}</h2></div>
      <span className="from-neutral-800 font-bold text-orange-600"><h3>{cuisines.join(",")} {"-"} Cost For Two: ₹  {costForTwo}</h3></span>
      {/* <ul>
        {itemCards.map((i) => (
          <li key={i.card.info.id}>
            {i.card.info.name}- Rs.
            {i.card.info.price / 100 || i.card.info.defaultPrice}
          </li>
        ))}
      </ul> */}
      <ul>
        {categories.map((i,index)=>
        (
          <li><RestroCategory data={i.card.card}
           showItems={index===showIndex?true:false}
           setShowIndex={()=>
           {
           setShowIndex(prevIndex => (prevIndex === index ? null : index));
          //  setShowIndex(index);
           }
           }/></li>
        ))}
      </ul>
    </div>
  );
};
