import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResultPage from "./SearchResultPage";

function SearchedFood() {
  const [restaurants, setRestaurants] = useState([]);
  const [matchedRestaurants, setMatchedRestaurants] = useState([]);
  const [matchedStarRatings, setMatchedStarRatings] = useState([]);
  const [matchedIds, setMatchedIds] = useState([]);

  const location = useLocation();
  const foodName = location.state && location.state.searchText;
  //console.log("location", location);

  useEffect(() => {
    getRestaurants();
  }, []);

  console.log("foodName", foodName);

  function getRestaurants() {
    fetch("https://restaurant-project-rwmk.onrender.com/api/restaurants", {})
      .then((res) => res.json())
      .then((restaurants) => {
        setRestaurants(restaurants);
      })
      .catch((err) => console.log(err));
  }

  function checkRestaurants(foodName) {
    const matchedRestaurants = [];
    const matchedStarRatings = [];
    const matchedIds = [];

    restaurants.forEach((restaurant) => {
      restaurant.cuisines.forEach((cuisine) => {
        // console.log(restaurant.cuisines);
        if (cuisine.toLowerCase().includes(foodName.toLowerCase())) {
          // console.log(cuisine.includes(foodName));
          //console.log(restaurant.name);
          if (!matchedRestaurants.includes(restaurant.name)) {
            matchedRestaurants.push(restaurant.name);
            matchedStarRatings.push(restaurant.avgRatingString);
            matchedIds.push(restaurant._id);
          }
        }
      });
    });

    setMatchedStarRatings(matchedStarRatings);
    setMatchedIds(matchedIds);

    console.log(matchedRestaurants);
    console.log(matchedStarRatings);
    console.log(matchedIds);

    return matchedRestaurants;
  }

  useEffect(() => {
    if (restaurants.length > 0 && foodName) {
      const matched = checkRestaurants(foodName);
      setMatchedRestaurants(matched);
    }
  }, [restaurants, foodName]);

  const propsForSearchResultPage = {
    matched: matchedRestaurants,
    matchedStarRatings: matchedStarRatings,
    foodName: foodName,
    itemsPerPage: 5,
    ids : matchedIds
  };

  return (
    <div>
      <SearchResultPage {...propsForSearchResultPage} />
    </div>
  );
}

export default SearchedFood;
