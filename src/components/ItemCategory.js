import ItemList from "./ItemList";
import { useState } from "react";
const ItemCategory = ({ data }) => {
  const { title, itemCards } = data;
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    if (showItems === false) {
      setShowItems(true);
    } else {
      setShowItems(false);
    }
  };
  return (
    <div>
      {/* Accordian Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordian Body */}
        {showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};
export default ItemCategory;
