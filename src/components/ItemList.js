import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          className="flex justify-between py-8 border-b-4"
          key={item.card.info.id}
        >
          <div className="text-left">
            <div className="font-bold">{item.card.info.name}</div>
            <div className="font-bold mb-4">₹{item.card.info.price / 100}</div>
            <div>{item.card.info.description}</div>
            <div className="mt-5">
              <button
                type="button"
                class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Add+
              </button>
            </div>
          </div>
          <img
            src={CDN_URL + item.card.info.imageId}
            className="w-4/12 h-auto"
          />
        </div>
      ))}
    </div>
  );
};
export default ItemList;
