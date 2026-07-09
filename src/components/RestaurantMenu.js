import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {

const dispatch = useDispatch()

const handleAddItem = (dish)=>{
  dispatch(addItem(dish))
}

  const { resID } = useParams();
  const resInfo = useRestaurantMenu(resID);

  if (resInfo === null) return <Shimmer />;

  const restaurant =
    resInfo?.data?.cards?.[2]?.card?.card?.info;

  const menuCards =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const menuCategories = menuCards?.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* Restaurant Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            {restaurant?.name}
          </h1>

          <p className="text-gray-500 mt-3">
            {restaurant?.cuisines?.join(", ")}
          </p>

          <div className="flex gap-4 mt-5 flex-wrap">
            <span className="bg-green-500 text-white px-4 py-1 rounded-full font-semibold">
              ⭐ {restaurant?.avgRating}
            </span>

            <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full">
              {restaurant?.costForTwoMessage}
            </span>
          </div>
        </div>

        {/* Menu */}
        {menuCategories?.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md mb-8 overflow-hidden"
          >
            <div className="bg-gray-50 border-b px-6 py-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {category?.card?.card?.title}
              </h2>
            </div>

            <div className="divide-y">
              {category?.card?.card?.itemCards?.map((item) => {
                const dish = item?.card?.info;

                return (
                  <div
                    key={dish?.id}
                    className="flex justify-between items-center p-6 hover:bg-gray-50 transition duration-200"
                  >
                    {/* Left */}
                    <div className="flex-1 pr-6">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {dish?.name}
                      </h3>

                      <p className="text-green-600 font-semibold mt-2">
                        ₹
                        {(dish?.price || dish?.defaultPrice) / 100}
                      </p>

                      {dish?.description && (
                        <p className="text-gray-500 text-sm mt-2 line-clamp-3">
                          {dish?.description}
                        </p>
                      )}
                    </div>

                    {/* Right */}
                    {dish?.imageId && (
                      <div className="relative">
                        <img
                          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${dish.imageId}`}
                          alt={dish?.name}
                          className="w-36 h-36 object-cover rounded-xl shadow-md"
                        />

                        <button className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-green-600 font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-green-600 hover:text-white transition"
                          onClick={()=> handleAddItem(dish)}
                          >
                          ADD 
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;