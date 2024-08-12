import React from 'react';

export const RestroCard = ({ restaurant }) => {
  const { name, address, rating, image } = restaurant;//reaciving props and destructre it

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="res-logo" src={image} />
      <h3>{name}</h3>
      <h4>{address}</h4>
      <h4>Rs {rating}</h4>
    </div>
  );
};
