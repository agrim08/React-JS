import RestaurantCard from "./RestaurantCard";

const CartContent = ({ name, cloudinaryImageId, price }) => {
  return (
    <div className="p-3 m-4 bg-amber-50 shadow-md w-56 h-auto">
      <img
        className="h-60 w-60"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h4 className=" font-bold">{name}</h4>
      <h4 className=""> {price}</h4>
    </div>
  );
};

export default CartContent;
