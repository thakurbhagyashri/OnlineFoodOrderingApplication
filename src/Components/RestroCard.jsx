import React from "react";
export const RestroCard = ({ restaurant }) => {
  const {
    name,
    areaName,
    avgRating,
    id,
    image = "https://media-assets.swiggy.com/swiggy/image/upload/" +
      restaurant.info.cloudinaryImageId,
  } = restaurant?.info || {};
  return (
    <div className="res-card">
      <img className="res-logo" alt={name} src={image} />
      <h3>{name}</h3>
      <h4>
        {areaName}
        {id}
      </h4>
      <h4>Rating: {avgRating}</h4>
    </div>
  );
};
