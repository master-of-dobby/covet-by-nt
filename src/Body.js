import RestaurantCard from "./RestaurantCard";
//import restaurants from "./common/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
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

  function handleRatingChange(rating) {
    {
      //Filter restaurants which have rating more than 4.2
      const filteredRest = filteredRestaurants.filter(
        (restaurant) => restaurant.avgRatingString > rating
      );
      //console.log("result : " + filteredRest);
      setFilteredRestaurants(filteredRest);
    }
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

          {/* <div>
            <form>
              <input
                type="radio"
                id="star5"
                name="rating"
                value="5"
                onChange={() => handleRatingChange(4.9)}
              />
              <label htmlFor="star5"></label>

              <input
                type="radio"
                id="star4"
                name="rating"
                value="4"
                onChange={() => handleRatingChange(4.5)}
              />
              <label htmlFor="star4"></label>

              <input
                type="radio"
                id="star3"
                name="rating"
                value="3"
                onChange={() => handleRatingChange(4.3)}
              />
              <label htmlFor="star3"></label>

              <input
                type="radio"
                id="star2"
                name="rating"
                value="2"
                onChange={() => handleRatingChange(40)}
              />
              <label htmlFor="star2"></label>

              <input
                type="radio"
                id="star1"
                name="rating"
                value="1"
                onChange={() => handleRatingChange(1)}
              />
              <label htmlFor="star1"></label>
            </form>
          </div> */}

          <div className="top-rated-restaurants">
            <button
              className="top-rated-res-btn"
              onClick={() => {
                //Filter restaurants which have rating more than 4.2
                const filteredRest = filteredRestaurants.filter(
                  (restaurant) => restaurant.avgRatingString > 4.3
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
