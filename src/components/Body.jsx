import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Utils";
import UserContext from "../utils/UserContext";

function Body() {
  const [searchText, setSearchText] = useState("");
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
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      console.log("API Response:", jsonData);

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
    return <div className="text-center mt-10 text-red-600">Error: {error}</div>;
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
  if (filteredRestaurants?.length === 0)
    return <h1 className="text-center mt-10 text-xl">No restaurant found</h1>;

  return (
    <div className="container mx-auto px-4 pt-24 pb-10">
      {/* Search and User Update Section */}
      <div className="mb-8 bg-gray-50 p-5 rounded-lg shadow-sm flex flex-col sm:flex-row items-center gap-4">
        <form
          onSubmit={handleSearch}
          className="flex items-center w-full sm:w-auto"
        >
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-grow border border-gray-300 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            data-testid="search-btn"
            className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded-r-md transition duration-300"
          >
            Search
          </button>
        </form>
      </div>

      {/* Restaurants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={`/restaurant/${restaurant?.info?.id}`}
          >
            <RestaurantCard {...restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
