const RestaurantCard = ({ name, cloudinaryImageId, cuisines, locality }) => {
  return (
    <div className="bg-white shadow-md overflow-hidden flex w-58">
      <img
        className="w-80 h-80 mb-7 flex"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <div className="ml-auto flex-col">
        <h4 className="px-5 py-3">{name}</h4>
        <h4 className="px-5 py-3">{cuisines.join(" ")}</h4>
        <h4 className="px-5 py-3"> {locality}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
