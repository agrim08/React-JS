import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ImageCdn } from "../Data/ImageCdn";
import Loader from "./Loader";
import useMenu from "../utils/useMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantData = useMenu(resId);
  const dispatch = useDispatch();

  const addFoodItem = (itemName) => {
    dispatch(addItem(itemName));
  };

  if (!restaurantData) {
    return <Loader />;
  }
  // console.log(
  //   restaurantData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
  //     ?.cards?.[1]?.card?.card?.itemCards?.[0]?.card?.info?.id
  // );
  // console.log(restaurantData);

  return (
    <div className="flex justify-around">
      <>
        <div className="flex">
          <img
            className="h-80 w-80 mt-5"
            src={
              ImageCdn +
              restaurantData?.data?.cards?.[2]?.card?.card?.info
                ?.cloudinaryImageId
            }
            alt=""
          />
          <div className="m-5 ">
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
        <div className="items-center flex flex-col">
          <h1 className="font-bold text-orange-400 text-xl">Menu</h1>
          <ul className="m-2 p-2 text-center border border-purple-300 flex flex-col items-start">
            {restaurantData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
              (item, index) =>
                item?.card?.card?.itemCards?.[0]?.card?.info?.name?.length ? (
                  <div
                    key={`${item?.card?.card?.itemCards?.[0]?.card?.info?.id}-${index}`}
                  >
                    <li>
                      {`${
                        item?.card?.card?.itemCards?.[0]?.card?.info?.name
                      }  - ₹ ${
                        item?.card?.card?.itemCards?.[0]?.card?.info?.price /
                        100
                      } `}
                      <img
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"
                        alt=""
                      />
                    </li>
                    <button
                      className="ml-5 p-2 border border-orange-500 bg-orange-400 text-white rounded-lg mt-1 gap-2 items-end"
                      onClick={() => addFoodItem(item)}
                    >
                      Add Item
                    </button>
                  </div>
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
