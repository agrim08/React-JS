import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ImageCdn } from "../Data/ImageCdn";
import Loader from "./Loader";
import useMenu from "../utils/useMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantData = useMenu(resId);

  if (!restaurantData) {
    return <Loader />;
  }
  // console.log(
  //   restaurantData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
  //     ?.cards?.[1]?.card?.card?.itemCards?.[0]?.card?.info?.id
  // );
  // console.log(restaurantData);

  return (
    <div className="flex justify-between">
      <>
        <div className="flex">
          <img
            className="h-80 w-80"
            src={
              ImageCdn +
              restaurantData?.data?.cards?.[2]?.card?.card?.info
                ?.cloudinaryImageId
            }
            alt=""
          />
          <div className="m-5">
            <h1>Restaurant Id: {resId}</h1>
            <h2>{restaurantData?.data?.cards?.[2]?.card?.card?.info?.name}</h2>

            <h3>
              {restaurantData?.data?.cards?.[2]?.card?.card?.info?.areaName}
            </h3>
            <h3>{restaurantData?.data?.cards?.[2]?.card?.card?.info?.city}</h3>
            <h3>
              {restaurantData?.data?.cards?.[2]?.card?.card?.info?.avgRating}{" "}
              stars
            </h3>
            <h3>
              {
                restaurantData?.data?.cards?.[2]?.card?.card?.info
                  ?.costForTwoMessage
              }
            </h3>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-orange-400">Menu</h1>
          <ul>
            {restaurantData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
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
