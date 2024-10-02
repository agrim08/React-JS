import { useState } from "react";
import restaurantsList from "../Data/restrauntList";
import RestaurantCard from "./RestaurantCard";

function filterData(searchTxt, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchTxt)
  );
  return filteredData;
}

const Body = () => {
  //* searchTxt is a local state variable
  const [searchTxt, setSearchText] = useState(""); //* to create state variable
  const [restaurants, setRestaurants] = useState(restaurantsList);

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTxt === "") {
      setRestaurants(restaurantsList);
    } else {
      const data = filterData(searchTxt, restaurantsList);
      setRestaurants(data);
    }
  };

  return (
    <>
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchTxt}
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
        {restaurants.map((restaurants) => {
          return (
            <RestaurantCard {...restaurants.info} key={restaurants.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
