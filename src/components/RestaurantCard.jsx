const RestaurantCard = ({ name, cloudinaryImageId, cuisines, locality }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col h-full">
      {/* Fixed-height Image Section */}
      <div className="h-48 w-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        <h4 className="font-bold text-lg text-gray-800">{name}</h4>
        <p className="text-gray-600 text-sm mt-1 flex-grow">
          {cuisines.join(", ")}
        </p>
        <p className="text-gray-500 text-xs mt-1">{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
