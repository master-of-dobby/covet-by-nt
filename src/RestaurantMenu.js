import { useParams } from "react-router-dom";
import { REST_IMG_URL } from "./common/constants";
import useRestaurantInfo from "./common/useRestaurantInfo";
import Shimmer from "./Shimmer";
// import MapWithDirections from "./MapWithDirections";

const RestaurantMenu = () => {
  const params = useParams();

  const restaurant = useRestaurantInfo(params.id);

  // const destinationLat = restaurant.latitude;
  // const destinationLng = restaurant.longitude;

  //console.log("restaurant : ", restaurant);
  //if(restaurant.latitude != null && restaurant.longitude != null)
  //console.log( restaurant + "==>" + restaurant.longitude);

  // if (restaurant && restaurant.latitude != null && restaurant.longitude != null) {
  //   console.log(`${restaurant.latitude} ==> ${restaurant.longitude}`);
  // }

  const openGoogleMaps = (destinationLat, destinationLng) => {
    console.log(destinationLat, " ==> ", destinationLng);
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}`;
    window.open(url, "_blank");
  };

  function displayMenu() {
    return restaurant.cuisines.map((item, index) => (
      <li key={index}>{item}</li>
    ));
  }

  // const destination = "San Francisco, CA";

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-menu-top">
        <div>
          <img
            className="rest-image"
            src={"https://m.media-amazon.com/images/I/71mlk+5TszL.jpg"}
            alt="robo-diner-restaurant-pic"
          />
        </div>
        {/* <h1> Restaurant Id : {params.id} </h1> */}

        <div className="res-info">
          <div className="res-det">
            <h1 className="flex-item-1">{restaurant.name} </h1>
            <h1 className="flex-item-2">{restaurant.avgRatingString}⭐</h1>
            <h1 className="flex-item-3">{restaurant.areaName} </h1>
          </div>
          <div className="rest-intro">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Welcome to <b>{restaurant.name}</b>, where taste buds ignite!
              Experience culinary bliss with our iconic Chicken Biryani, a
              flavorful masterpiece that defines our commitment to excellence.
              Your journey to spice-infused delight starts here :)
            </p>
          </div>
        </div>
      </div>
      <div className="restaurant-menu-bottom">
        <div className="menu-list">
          <h2 style={{ color: "Yellow", fontWeight: "600", fontSize: "2rem" }}>
            MENU
          </h2>
          {/* <h3>{restaurant.cuisines[0]}</h3>
          <h3>{restaurant.cuisines[1]}</h3>
          <h3>{restaurant.cuisines[2]}</h3>
          <h3>{restaurant.cuisines[3]}</h3>
          {/* <h3>{restaurant.menu.items[0].name}</h3> */}
          <ul id="foodItemsList">{displayMenu()}</ul>
        </div>
        <div className="bottom-middle">
          <div className="diretion-button">
            <button
              className="get-me-btn"
              onClick={() =>
                openGoogleMaps(restaurant.latitude, restaurant.longitude)
              }
            >
              Get Me↗️
            </button>
          </div>
        </div>
        <img
          className="rest-image"
          src={`${REST_IMG_URL}${restaurant.cloudinaryImageId}`}
          alt="food-items-pic"
        ></img>
      </div>
    </div>
  );
};

export default RestaurantMenu;

/* <MapWithDirections
        apiKey="AIzaSyCh7Okz4liEvEuEYvoCZKcWTtioGBf8XRk"
        destination={destination}
      /> */
