import React, { useState } from "react";
import { RestroCard } from "./RestroCard";
import resList from "../Utils/mockData";
import { useState } from "react";
export const Body = () => {
  const { restaurants } = resList;
  // state variable
  let [restorantList, setRestroList] = useState(restaurants);
  return (
    <div className="body">
      <div className="search">Search</div>
      <button
        className="button1"
        onClick={() => {
          const filteredList = restorantList.filter((res) => res.rating <= 3);
          // console.log(restorantList);
          setRestroList(filteredList);
        }}
      >
        Top Restorant{" "}
      </button>
      <div className="res-container">
        {restorantList.map((restaurant) => (
          <RestroCard restaurant={restaurant} /> //passing props
        ))}
      </div>
    </div>
  );
};
