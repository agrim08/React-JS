const RestaurantCard = ({ name, cloudinaryImageId, cuisines, locality }) => {
  return (
    <div className="card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h4>{name}</h4>
      <h4>{cuisines.join(" ")}</h4>
      <h4> {locality}</h4>
    </div>
  );
};

export default RestaurantCard;
