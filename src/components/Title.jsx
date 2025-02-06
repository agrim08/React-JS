import Logo from "../assets/Logo.jpg";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex items-center">
      <Link to="/">
        <img
          data-testid="logo"
          className="md:h-16 md:w-16 sm:h-10 sm:w-10 rounded-full"
          src={Logo}
          alt="logo"
        />
      </Link>
      <div className="ml-4 hidden md:block">
        <h3 className="text-lg font-semibold text-gray-800 ">
          Welcome, {user.name} 😊
        </h3>
        <p className="text-sm text-gray-600">Your mail, {user.email}</p>
      </div>
    </div>
  );
};

export default Title;
