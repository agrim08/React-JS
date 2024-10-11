import Title from "./Title";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);

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
            <li>
              <a href="/">Cart</a>
            </li>

            <li className="justify-self-end">
              {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
              ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
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
