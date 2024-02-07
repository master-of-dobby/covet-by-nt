import { useParams } from "react-router-dom";
import { REST_IMG_URL } from "./common/constants";
import useRestaurantInfo from "./common/useRestaurantInfo";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();

  const restaurant = useRestaurantInfo(params.id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div>
        <h1> Restaurant Id : {params.id} </h1>
        <img
          className="rest-image"
          src={`${REST_IMG_URL}${restaurant.cloudinaryImageId}`}
          alt="table 9 restaurant logo"
        />
        <h2>{restaurant.name} </h2>
        <h2>{restaurant.areaName} </h2>
      </div>

      <div className="menu-list">
        <h2>MENU</h2>
        <h3>{restaurant.menu.items[0].name}</h3>
        <h3>{restaurant.menu.items[1].name}</h3>
        <h3>{restaurant.menu.items[0].name}</h3>
        <h3>{restaurant.menu.items[1].name}</h3>
        <h3>{restaurant.menu.items[0].name}</h3>
        <h3>{restaurant.menu.items[1].name}</h3>
      </div>
    </div>
  );
};

export default RestaurantMenu;
