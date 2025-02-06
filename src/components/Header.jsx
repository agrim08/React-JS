import Title from "./Title";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isOnline = useOnline();
  const cartItems = useSelector((store) => store.cart.items);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Title */}
        <Title />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/home"
            className="text-gray-700 hover:text-orange-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-orange-500 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            target="_blank"
            className="text-gray-700 hover:text-orange-500 transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/instamart"
            className="text-gray-700 hover:text-orange-500 transition duration-300"
          >
            Instamart
          </Link>
          <Link
            to="/cart"
            className="text-gray-700 hover:text-orange-500 transition duration-300"
          >
            <span data-testid="cart-status">Cart ({cartItems.length})</span>
          </Link>
        </nav>

        {/* Action Buttons & Hamburger Menu */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition duration-300"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
          <span
            data-testid="online-status"
            className={`text-sm font-semibold ${
              isOnline ? "text-green-600" : "text-red-600"
            }`}
          >
            {isOnline ? "Online ✅" : "Offline ❌"}
          </span>

          {/* Hamburger button: Visible only on mobile */}
          <button className="md:hidden ml-4" onClick={toggleMenu}>
            {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 px-4 py-3">
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              target="_blank"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/instamart"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Instamart
            </Link>
            <Link
              to="/cart"
              className="text-gray-700 hover:text-orange-500 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <span data-testid="cart-status">Cart ({cartItems.length})</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
