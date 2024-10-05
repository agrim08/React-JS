import { useState, useEffect, useRef } from "react";
import RestaurantCard from "./RestaurantCard";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const filterData = (searchText, restaurants) => {
  const filteredData = restaurants?.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filteredData;
};

//* const myJSON = { a: "Ford", b: "BMW", c: "Fiat" };
// const myArray = JSON.stringify(myJSON);
// console.log(myArray);

function Body() {
  //* searchText is a local state variable
  const [searchText, setSearchText] = useState(""); //* to create state variable
  const [allRestaurants, setAllRestaurants] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
      setAllRestaurants(
        jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      console.log(jsonData);
    } catch {
      setError(error.message);
    }
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (isLoading) {
    return (
      <>
        <ShimmerSimpleGallery imageHeight={350} col={4} caption />
        <ShimmerSimpleGallery card imageHeight={350} />
        <ShimmerSimpleGallery card imageHeight={350} caption />
      </>
    );
  }
  //* console.log(true);

  function handleSearch(e) {
    e.preventDefault();
    const data = filterData(searchText, allRestaurants);
    setFilteredRestaurants(data);
  }
  //* console.log(restaurants);

  //* early return
  if (!allRestaurants) return null;

  if (filteredRestaurants?.length === 0) return <h1>No restaurant found</h1>;

  return allRestaurants?.length === 0 ? (
    <>
      <ShimmerSimpleGallery imageHeight={350} col={4} caption />
      <ShimmerSimpleGallery card imageHeight={350} />
      <ShimmerSimpleGallery card imageHeight={350} caption />
    </>
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="search-btn" type="submit" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="restraunt-lists">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant?.info} key={restaurant?.info?.id} />
          );
        })}
      </div>
    </>
  );
}
export default Body;
