import React from "react";
const RestroCard = ({ restaurant }) => {
  const {
    name,
    areaName,
    avgRating,
    image = "https://media-assets.swiggy.com/swiggy/image/upload/" +
      restaurant.info?.cloudinaryImageId,
  } = restaurant?.info || {};

  return (
    <div className="m-4 p-4 w-[200px] rounded-lg hover:bg-slate-200">
      <img className="flex w-44 h-44 rounded-lg" alt={name} src={image} />
      <div className="bold">
        <h3>{name}</h3>
      </div>
      <h4>{areaName}</h4>
      {/* <div className="">
        {" "}
        <h4>Rating: {avgRating}</h4>
      </div> */}
      {avgRating <= 4 ? (
        <div className="text-amber-500 ">
          {" "}
          <h4 className="font-bold">⭐{avgRating}</h4>
        </div>
      ) : (
        <div className="">
          {" "}
          <h4 className="font-bold text-lime-700">⭐{avgRating}</h4>
        </div>
      )}
    </div>
  );
};

// Higher-order component:
export const withPromotedLabel = (RestroCard) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute top-0 m-4 bg-lime-600 text-white p-1 rounded-bl-lg ">
          Top
        </span>
        <RestroCard {...props} />
      </div>
    );
  };
};

export default RestroCard;
