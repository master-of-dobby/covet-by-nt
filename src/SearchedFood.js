import React from "react";
import { useLocation } from "react-router-dom";
import { restaurant_info } from "./common/restaurant_info";
import SearchResultPage from "./SearchResultPage";

function SearchedFood() {
  const location = useLocation();
  const foodName = location.state && location.state.foodName;
  const restaurant = restaurant_info;
  // console.log(restaurant[0].cuisines);
  const matchedStarRatings = [];

  const matchedRestaurants = [];

  function checkRestaurants() {
    for (let i = 0; i < restaurant.length; i++) {
      for (let j = 0; j < restaurant[i].cuisines.length; j++) {
        console.log(restaurant[i].cuisines[j] + foodName);
        if (restaurant[i].cuisines[j] == foodName) {
          console.log(foodName);
          matchedRestaurants.push(restaurant[i].name);
          if (i == 0) matchedStarRatings.push(4.7);
          else matchedStarRatings.push(restaurant[i].avgRatingString);
        }
      }
      // if(restaurant[i].cuisines.includes(foodName)) return restaurant[i].name;
    }

    return matchedRestaurants;
  }

  // function showRat() {
  //   matchedStarRatings.forEach((ratings) => {
  //     console.log(ratings);
  //   });
  // }

  const matched = checkRestaurants(foodName);

  const propsForSearchResultPage = {
    matched: matched,
    matchedStarRatings: matchedStarRatings,
    foodName: foodName,
    itemsPerPage: 5,
  };

  return (
    <>
      <div>
        <SearchResultPage {...propsForSearchResultPage} />
      </div>
    </>
  );
}

export default SearchedFood;
