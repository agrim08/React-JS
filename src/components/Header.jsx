import Title from "./Title";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="bg-pink-100 shadow-md h-auto">
      <div className="flex items-center justify-between">
        <div>
          <Title />
        </div>
        <div className="flex space-x-4 mr-8">
          <ul className="flex py-2 space-x-10">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact" target="_blank">
              <li>Contact</li>
            </Link>
            <Link to="/instamart">
              <li>Instamart</li>
            </Link>
            <Link to="/cart">
              <li>Cart - {cartItems.length}</li>
            </Link>
            <li className="justify-self-end">
              {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
              ) : (
                <button
                  onClick={() => {
                    setIsLoggedIn(true);
                  }}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end px-10">
        <h3>{isOnline ? "Online ✅" : "Offline ❌"}</h3>
      </div>
    </div>
  );
};
export default HeaderComponent;
