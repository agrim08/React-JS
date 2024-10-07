import Title from "./Title";
import { useState } from "../../node_modules/react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
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

          <li>Cart</li>
        </ul>
      </div>
      <h2>{isOnline ? "Online ✅" : "Offline ❌"}</h2>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default HeaderComponent;
