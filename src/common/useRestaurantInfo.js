import { restaurant_info } from "./restaurant_info";
import { useEffect, useState } from "react";

const useRestaurantInfo = (id) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  // Get data from API

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    //make API call with restaurant id
    const data = restaurant_info;

    const foundItem = data.find((d) => d._id === id);
    if (!foundItem) {
      console.log("No restaurant found with the provided ID. =  ", id);
      return console.log("No item found");
    } else setRestaurantInfo(foundItem);
    // setRestaurantInfo(data[id]);
  }
  return restaurantInfo;
};

export default useRestaurantInfo;
