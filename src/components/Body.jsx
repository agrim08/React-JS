import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Utils";
import UserContext from "../utils/UserContext";
import { act } from "@testing-library/react";

function Body() {
  //* searchText is a local state variable
  const [searchText, setSearchText] = useState(""); //* to create state variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await data.json();
      console.log("API Response:", jsonData); // Log the entire response

      // Check if the expected data structure exists
      const restaurants = jsonData?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (restaurants && restaurants.length > 0) {
        setAllRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      } else {
        throw new Error("No restaurants found in the API response");
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (isLoading) {
    return <Loader />;
  }

  function handleSearch(e) {
    e.preventDefault();
    const data = filterData(searchText, allRestaurants);
    setFilteredRestaurants(data);
  }
  if (!allRestaurants) return null;

  if (filteredRestaurants?.length === 0) return <h1>No restaurant found</h1>;

  return allRestaurants?.length === 0 ? (
    <Loader />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-100 shadow-md mb-4 mt-0">
        <input
          className="shadow-purple-100 focus:bg-green-100 p-2 rounded-md select: outline-pink-800"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            e.preventDefault();
            setSearchText(e.target.value);
          }}
        />
        <button
          data-testid="search-btn"
          className="w-20 h-9 ml-2 p-2 text-white rounded-full bg-violet-500 hover:bg-violet-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          type="submit"
          onClick={handleSearch}
        >
          Search
        </button>
        <input
          className="text-gray-500 pl-3 text-sm h-9 border border-pink-300 rounded-full ml-5 mb-1 select: outline-none "
          type="text"
          value={user.name}
          onChange={(e) => {
            e.preventDefault();
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
        <input
          className="text-gray-500 pl-3 text-sm h-9 border border-pink-300 rounded-full ml-5 mb-1 select: outline-none"
          type="text"
          value={user.email}
          onChange={(e) => {
            e.preventDefault();
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={`/restaurant/${restaurant?.info?.id}`}
              key={restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant?.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
export default Body;
