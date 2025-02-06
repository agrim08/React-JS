import { useParams } from "react-router-dom";
import Loader from "./Loader";
import useMenu from "../utils/useMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { ImageCdn } from "../Data/ImageCdn";
import { Star, Clock, PlusCircle } from "lucide-react";

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
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          {/* Restaurant Header */}
          <div className="relative h-64 md:h-80">
            <img
              className="w-full h-full object-cover"
              src={`${ImageCdn}${info?.cloudinaryImageId}`}
              alt={info?.name}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {info?.name}
              </h1>
              <p className="text-gray-200 text-sm md:text-base">
                {info?.areaName}, {info?.city}
              </p>
            </div>
          </div>

          {/* Restaurant Info */}
          <div className="flex flex-wrap justify-between items-center px-6 py-4 bg-gray-100">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <span className="flex items-center text-green-600">
                <Star className="w-5 h-5 mr-1" />
                <span className="font-semibold">{info?.avgRating}</span>
              </span>
              <span className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-1" />
                <span>{info?.deliveryTime} mins</span>
              </span>
              <span className="flex items-center text-gray-600">
                <span>{info?.costForTwoMessage}</span>
              </span>
            </div>
          </div>

          {/* Menu Section */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b">
              Menu
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.map((item, index) => {
                const itemInfo = item?.card?.card?.itemCards?.[0]?.card?.info;
                if (!itemInfo?.name?.length) return null;
                return (
                  <div
                    key={`${itemInfo?.id}-${index}`}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {itemInfo?.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                          ₹
                          {itemInfo?.price
                            ? (itemInfo?.price / 100).toFixed(2)
                            : "N/A"}
                        </p>
                      </div>
                      {itemInfo?.imageId && (
                        <img
                          src={`${ImageCdn}${itemInfo.imageId}`}
                          alt={itemInfo.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                      )}
                    </div>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                      {itemInfo?.description || "No description available"}
                    </p>
                    <button
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow transition duration-300 flex items-center justify-center"
                      onClick={() => addFoodItem(item)}
                    >
                      <PlusCircle className="w-5 h-5 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RestaurantMenu;
