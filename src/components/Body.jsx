import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Utils";
import UserContext from "../utils/UserContext";
import { Search } from "lucide-react";

function Body() {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

      const restaurants = jsonData?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (restaurants && restaurants.length > 0) {
        setAllRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      } else {
        throw new Error("No restaurants found in your location");
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    const data = filterData(searchText, allRestaurants);
    setFilteredRestaurants(data);
  }

  if (error) {
    return (
      <div className="text-center mt-24 text-red-600 text-xl">{error}</div>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  if (!allRestaurants) return null;
  if (filteredRestaurants?.length === 0)
    return (
      <h1 className="text-center mt-24 text-2xl font-semibold">
        No restaurants found
      </h1>
    );

  return (
    <main className="container mx-auto px-4 pt-24 pb-16">
      <section className="mb-12">
        <form
          onSubmit={handleSearch}
          className="max-w-2xl mx-auto flex items-center bg-white rounded-full shadow-md overflow-hidden"
        >
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-grow px-6 py-4 focus:outline-none text-gray-700"
          />
          <button
            type="submit"
            data-testid="search-btn"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 transition duration-300"
          >
            <Search size={20} />
          </button>
        </form>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={`/restaurant/${restaurant?.info?.id}`}
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <RestaurantCard {...restaurant?.info} />
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Body;
