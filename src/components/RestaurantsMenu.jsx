import { useParams } from "react-router-dom";
import Loader from "./Loader";
import useMenu from "../utils/useMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { ImageCdn } from "../Data/ImageCdn";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantData = useMenu(resId);
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  if (!restaurantData) {
    return <Loader />;
  }

  // Extract restaurant info for convenience
  const info = restaurantData?.data?.cards?.[2]?.card?.card?.info;
  const menuItems =
    restaurantData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards || [];

  return (
    <div className="min-h-screen bg-gray-50 my-auto py-20">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Use a responsive grid that falls back to a single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white shadow-md rounded-xl p-6">
          {/* Restaurant Details Section */}
          <div className="md:col-span-1 flex flex-col items-center">
            <img
              className="w-full h-56 object-cover rounded-lg"
              src={`${ImageCdn}${info?.cloudinaryImageId}`}
              alt={info?.name}
            />
            <h1 className="text-2xl font-bold text-gray-800 mt-4 text-center">
              {info?.name}
            </h1>
            <p className="text-gray-600 text-sm text-center">
              {info?.areaName}, {info?.city}
            </p>
            <div className="mt-3 flex flex-wrap justify-center space-x-2">
              <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs">
                ⭐ {info?.avgRating} stars
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                {info?.costForTwoMessage}
              </span>
            </div>
          </div>

          {/* Menu Section */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-orange-500 mb-6 border-b pb-2">
              Menu
            </h2>
            {/* Responsive grid for menu items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {menuItems.map((item, index) => {
                const itemInfo = item?.card?.card?.itemCards?.[0]?.card?.info;
                if (!itemInfo?.name?.length) return null;
                return (
                  <div
                    key={`${itemInfo?.id}-${index}`}
                    className="flex flex-col justify-between bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    <div>
                      <p className="text-gray-800 font-semibold">
                        {itemInfo?.name}
                      </p>
                      <p className="text-gray-600 text-sm">
                        ₹ {itemInfo?.price ? itemInfo?.price / 100 : "N/A"}
                      </p>
                    </div>
                    <button
                      className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow transition"
                      onClick={() => addFoodItem(item)}
                    >
                      Add Item
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
