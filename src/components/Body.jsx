import { useState, useEffect } from "react";
import restaurantsList from "../Data/restrauntList";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
  const filteredData = restaurants?.filter((restaurant) =>
    restaurant?.info?.name?.includes(searchText)
  );
  return filteredData;
}

function Body() {
  //* searchText is a local state variable
  const [searchText, setSearchText] = useState(""); //* to create state variable
  const [restaurants, setRestaurants] = useState(restaurantsList);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRestaurants(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  const handleSearch = (event) => {
    event.preventDefault();
    const data = filterData(searchText, restaurantsList);
    setRestaurants(data);
  };
  // console.log(restaurants);

  return (
    <>
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="search-btn" type="submit">
            Search
          </button>
        </form>
      </div>

      <div className="restraunt-lists">
        {restaurants?.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant?.info} key={restaurant?.info?.id} />
          );
        })}
      </div>
    </>
  );
}

export default Body;
