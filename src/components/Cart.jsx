import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartContent from "./CartContent";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-orange-300 mb-6">
            Cart - {cartItems.length}
          </h2>
          <button
            className="mb-8 bg-red-500 hover:bg-red-600 text-white text-xl px-6 py-2 rounded-lg border border-black transition duration-300"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            Your cart is empty.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cartItems.map((item, index) => {
              // Extract itemInfo using the same structure as in the menu component
              const itemInfo = item?.card?.card?.itemCards?.[0]?.card?.info;
              return <CartContent key={index} itemInfo={itemInfo} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
