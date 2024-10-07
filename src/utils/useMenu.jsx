import { useState, useEffect } from "react";
const useMenu = (resId) => {
  const [restaurantData, setrestaurantData] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsonData = await data.json();
    setrestaurantData(jsonData);
  }
  return restaurantData;
};

export default useMenu;
