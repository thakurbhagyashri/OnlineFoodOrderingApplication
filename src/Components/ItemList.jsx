import React, { useState } from 'react';

const ItemList = ({ items }) => {
  console.log(items);
  const [count, setCount]=useState(null);
const click=()=>
{
  setCount();
}
  return (
    <div className="space-y-5"> {/* Adds space between items */}
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex flex-col md:flex-row items-start p-5 border border-gray-200 rounded-lg shadow-md"
        >
          <div className="flex-shrink-0">
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.card.info.imageId}`}
              className="w-32 h-32 object-cover rounded-lg mb-4"
              alt={item.card.info.name}
            />
            <button
              className="
                px-7
                py-2
                bg-white
                rounded-lg
                shadow-md
                border
                border-gray-300
                hover:bg-slate-300
                focus:outline-none
                focus:ring-2
                focus:ring-green-300
                transition
                duration-300
                ease-in-out
                text-green-600
                font-extrabold
              "
              onClick={()=>
              {
                setCount(count+1);
                
                console.log("click");   
              }}
            >
              ADD +
            </button>
          </div>
          <div className="flex-grow">
            <span className="block text-lg font-bold">{item.card.info.name}</span>
            <span className="block text-xl font-bold text-green-800">
              ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-sm text-gray-600 mt-2">{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
