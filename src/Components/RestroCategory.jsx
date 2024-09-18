import { useState } from "react";
import ItemList from "./ItemList";
const RestroCategory = ({ data, showItems,setShowIndex }) => {
  console.log(data);
  // const [showItems,setShowItems]=useState(false);
  const handleClick=()=>
  {
    setShowIndex();
  }

  return (<div>
    <div className="w-6/12 mx-auto my-4 shadow-lg p-4 bg-gray-50 ">
      <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-semibold text-lg">
          {data.title} ({data.itemCards.length})
        </span>

       <span>🔽</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
    </div>
  );
};
export default RestroCategory;
