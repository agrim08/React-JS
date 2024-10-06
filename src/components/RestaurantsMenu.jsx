import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ImageCdn } from "../Data/ImageCdn";
import Loader from "./Loader";

const RestaurantMenu = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsonData = await data.json();
    setIsLoading(false);
    // console.log(jsonData);
    setRestaurant(jsonData);
  }
  if (isLoading) {
    return <Loader />;
  }
  console.log(
    restaurant?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card?.itemCards?.[0]?.card?.info?.id
  );
  console.log(restaurant);

  return (
    <div className="menu-cards">
      <>
        <div>
          <h1>Restaurant Id: {resId}</h1>
          <h2>{restaurant?.data?.cards?.[2]?.card?.card?.info?.name}</h2>
          <img
            src={
              ImageCdn +
              restaurant?.data?.cards?.[2]?.card?.card?.info?.cloudinaryImageId
            }
            alt=""
          />
          <h3>{restaurant?.data?.cards?.[2]?.card?.card?.info?.areaName}</h3>
          <h3>{restaurant?.data?.cards?.[2]?.card?.card?.info?.city}</h3>
          <h3>
            {restaurant?.data?.cards?.[2]?.card?.card?.info?.avgRating} stars
          </h3>
          <h3>
            {restaurant?.data?.cards?.[2]?.card?.card?.info?.costForTwoMessage}
          </h3>
        </div>
        <div>
          <h1>Menu</h1>
          <ul>
            {restaurant?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
              (item) =>
                item?.card?.card?.itemCards?.[0]?.card?.info?.name?.length ? (
                  <li key={item?.card?.card?.itemCards?.[0]?.card?.info?.id}>
                    {`${
                      item?.card?.card?.itemCards?.[0]?.card?.info?.name
                    } - ₹ ${
                      item?.card?.card?.itemCards?.[0]?.card?.info?.price / 100
                    }`}
                  </li>
                ) : (
                  <></>
                )
            )}
          </ul>
        </div>
      </>
    </div>
  );
};
export default RestaurantMenu;
