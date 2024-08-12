import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ItemCategory from "./ItemCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, avgRating, totalRatingsString, locality } =
    resInfo?.cards[2]?.card?.card?.info;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h2 className="font-bold mt-6 text-xl">
        {name} (Outlet: {locality})
      </h2>
      <p>
        ⭐{avgRating}({totalRatingsString})
      </p>
      <p className="font-bold text-lg text-orange-500 underline">
        {cuisines.join(",")}
      </p>
      {categories.map((category) => (
        <ItemCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
