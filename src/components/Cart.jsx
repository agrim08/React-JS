import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

// import CartContent from "./CartContent";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleclearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="h-auto">
      <h2 className="font-bold text-3xl text-orange-300">
        Cart - {cartItems.length}
      </h2>
      <button
        className="bg-red-400 text-white text-3xl border border-black rounder-lg"
        onClick={() => handleclearCart()}
      >
        Clear Cart
      </button>
      {/* <CartContent {...cartItems[0]} /> */}
    </div>
  );
};
export default Cart;
