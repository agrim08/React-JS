import Logo from "../assets/Logo.jpg";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex items-center justify-items-centerter">
      <Link to="/">
        <img
          data-testid="logo"
          className="h-20 w-22 px-3 py-2 mr-5"
          src={Logo}
          alt="logo"
        />
      </Link>
      <h3 className="px-4 py-2 m-2 font-semibold text-orange-500">
        Welcome, {user.name} 😊
      </h3>
      <h3 className="px-4 py-2 m-2 font-semibold text-black">
        Your mail, {user.email}
      </h3>
    </div>
  );
};
export default Title;
