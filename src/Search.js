import { useState, useEffect } from "react";
import { filterRestaurants } from "./common/HomePageSearch";
import SearchResultPage from "./SearchResultPage";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  //const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // const [propsForSearchResultPage, setPropsForSearchResultPage] = useState({});

  useEffect(() => {
    getRestaurants();
  }, []);

  function getRestaurants() {
    fetch("https://restaurant-project-rwmk.onrender.com/api/restaurants", {})
      .then((res) => res.json())
      .then((restaurants) => {
        setAllRestaurants(restaurants);
        // setFilteredRestaurants(restaurants);
      })
      .catch((err) => console.log(err));
  }

  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchText === "") {
      return;
    }

    // const data = filterRestaurants(searchText, allRestaurants);
    // //console.log(data);

    // if (!data) {
    //   console.log("No Restaurants Found! :(");
    //   setFilteredRestaurants([]);
    //   setPropsForSearchResultPage({});
    // } else {
    //   setFilteredRestaurants(data);
    //   const finalRests = data.map((restaurant) => restaurant.name);
    //   const starRatings = data.map((ratings) => ratings.avgRatingString);
    //   console.log(finalRests);
    //   console.log(starRatings);
    //   setPropsForSearchResultPage({
    //     matched: finalRests,
    //     matchedStarRatings: starRatings,
    //     foodName: searchText,
    //     itemsPerPage: 5,
    //   });
    // }
    else {
      console.log("searchtext ", searchText);

      navigate("/searchedrestaurants", { state: { searchText } });
    }
  };

  // const handleButtonClick = () => {
  //   navigate("/searchedrestaurants", { state: { foodName } });
  // };

  return (
    <>
      <div className="search-box">
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
        ></input>
        <i
          className="fa fa-search
        search-icon"
        ></i>
        <button onClick={handleSearch}>Search</button>
      </div>
    </>
  );
}

export default Search;
