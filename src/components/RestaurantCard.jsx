import { Star } from "lucide-react";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  locality,
  avgRating,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      {/* Image Section */}
      <div className="h-48 w-full overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {cuisines.join(", ")}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-gray-500 text-sm">{locality}</p>
          <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded">
            <Star size={16} className="mr-1" />
            <span>{avgRating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
