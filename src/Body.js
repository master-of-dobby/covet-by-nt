import RestaurantCard from "./RestaurantCard";
//import restaurants from "./common/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./common/useOnlineStatus";
import { filterData } from "./common/Helper";
import "./App.css";
//import { useQuery } from "react-query";

// React Hook ---> simple JS function

export const Body = () => {
  //console.log("render");

  const [searchText, setSearchText] = useState("");

  const [allRestaurants, setAllRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  function getRestaurants() {
    // setTimeout(() => {

    fetch("https://restaurant-project-rwmk.onrender.com/api/restaurants", {
      // headers: {
      //   Authoriztion:
      //     "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWE5OWJlZTJkMzdkNjBmMmM2MThhNiIsImlhdCI6MTcwNTY5MTMzMH0.aX4dWQVApKYEyMK-fMqMLL7VVzmAHWBiDP46XAPJmUE",
      // },
    })
      .then((res) => res.json())
      .then((restaurants) => {
        //console.log("API response : ", restaurants);

        // const data = restaurants;

        setAllRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      })
      .catch((err) => console.log(err));

    // }, 1000);
  }

  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return <h1>Offline :() Please Check your Internet Connection!</h1>;
  }

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="Body">
        <div className="top-restaurants-bar">
          <div className="search">
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="search"
              className="search"
              value={searchText}
            ></input>
            <button
              onClick={() => {
                const data = filterData(searchText, allRestaurants);

                //console.log(data);

                setFilteredRestaurants(data);
              }}
              className="search-btn"
            >
              Search
            </button>
          </div>

          <div className="top-rated-restaurants">
            <button className="top-rated-res-btn"
              onClick={() => {
                //Filter restaurants which have rating more than 4.2
                const filteredRest = filteredRestaurants.filter(
                  (restaurant) => restaurant.starRating > 4.2
                );
                //console.log("result : " + filteredRest);
                setFilteredRestaurants(filteredRest);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>

        <div className="res-container">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant._id}>
                <RestaurantCard key={restaurant._id} resDetails={restaurant} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
