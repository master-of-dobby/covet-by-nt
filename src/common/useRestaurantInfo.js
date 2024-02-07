import { restaurant_info } from "./restaurant_info";
import { useEffect, useState } from "react";

const useRestaurantInfo = (id) => {

    const [restaurantInfo, setRestaurantInfo] = useState(null);
    // Get data from API

    useEffect( () => {
        getRestaurantInfo();
    }
    ,[]);

    async function getRestaurantInfo(){
        //make API call with restaurant id
        const data = restaurant_info;
        setRestaurantInfo(data[0]);
    }

    return restaurantInfo;

}

export default useRestaurantInfo;