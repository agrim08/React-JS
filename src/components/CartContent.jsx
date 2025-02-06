import { useEffect } from "react";
import { ImageCdn } from "../Data/ImageCdn";

const CartContent = ({ itemInfo }) => {
  useEffect(() => {
    if (!itemInfo) return;
  }, [itemInfo]);

  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center transition hover:shadow-lg">
      {itemInfo?.imageId && (
        <img
          src={`${ImageCdn}${itemInfo?.imageId}`}
          alt={itemInfo?.name}
          className="w-24 h-24 object-cover rounded-full mb-4"
        />
      )}
      <h3 className="text-xl font-bold text-gray-800 mb-2">{itemInfo?.name}</h3>
      <p className="text-gray-600">
        ₹ {itemInfo?.price ? (itemInfo?.price / 100).toFixed(2) : "N/A"}
      </p>
    </div>
  );
};

export default CartContent;
