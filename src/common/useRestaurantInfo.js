import { useEffect, useState } from "react";

const useRestaurantInfo = (id) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://restaurant-project-rwmk.onrender.com/api/restaurants"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        const foundItem = data.find((d) => d._id == id);

        if (!foundItem) {
          console.log("No restaurant found with the provided ID:", id);
        } else {
          setRestaurantInfo(foundItem);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    console.log("Restaurant Info:", restaurantInfo);
  }, [restaurantInfo]);

  return restaurantInfo;
};

export default useRestaurantInfo;
