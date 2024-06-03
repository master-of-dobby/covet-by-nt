import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResultPage from "./SearchResultPage";

function SearchedFood() {
  const [restaurants, setRestaurants] = useState([]);
  const [matchedRestaurants, setMatchedRestaurants] = useState([]);
  const [matchedStarRatings, setMatchedStarRatings] = useState([]);
  const [matchedIds, setMatchedIds] = useState([]);
  const [matchedLats, setMatchedLats] = useState([]);
  const [matchedLongs, setMatchedLongs] = useState([]);
  const [cuisineMap, setCuisineMap] = useState(new Map());

  const location = useLocation();
  const foodName = location.state && location.state.searchText;

  useEffect(() => {
    getRestaurants();
  }, []);

  function getRestaurants() {
    fetch("https://restaurant-project-rwmk.onrender.com/api/restaurants", {})
      .then((res) => res.json())
      .then((restaurants) => {
        setRestaurants(restaurants);
        preprocessData(restaurants);
      })
      .catch((err) => console.log(err));
  }

  function preprocessData(restaurants) {
    const cuisineMap = new Map();

    restaurants.forEach((restaurant) => {
      restaurant.cuisines.forEach((cuisine) => {
        const words = cuisine.split(" ");
        words.forEach((word, index) => {
          const subCuisine = words.slice(index).join(" ").toLowerCase();
          if (!cuisineMap.has(subCuisine)) {
            cuisineMap.set(subCuisine, []);
          }
          cuisineMap.get(subCuisine).push(restaurant);
        });
      });
    });

    setCuisineMap(cuisineMap);
  }

  function checkRestaurants(foodName) {
    const lowerCaseFoodName = foodName.toLowerCase();
    let matchedRestaurants = new Set(); // Using a Set to ensure uniqueness

    for (let [cuisine, restaurants] of cuisineMap.entries()) {
      if (cuisine.includes(lowerCaseFoodName)) {
        restaurants.forEach((restaurant) => {
          matchedRestaurants.add(restaurant);
        });
      }
    }
  
    matchedRestaurants = Array.from(matchedRestaurants); // Convert Set back to Array

    const matchedStarRatings = matchedRestaurants.map(
      (restaurant) => restaurant.avgRatingString
    );
    const matchedIds = matchedRestaurants.map((restaurant) => restaurant._id);
    const matchedLats = matchedRestaurants
      .map((restaurant) => restaurant.latitude)
      .filter((lat) => lat);
    const matchedLongs = matchedRestaurants
      .map((restaurant) => restaurant.longitude)
      .filter((long) => long);

    setMatchedIds(matchedIds);
    setMatchedLats(matchedLats);
    setMatchedLongs(matchedLongs);
    setMatchedStarRatings(matchedStarRatings);

    return matchedRestaurants.map((restaurant) => restaurant.name);
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
    ids: matchedIds,
    matchedLats: matchedLats,
    matchedLongs: matchedLongs,
  };

  return (
    <div>
      <SearchResultPage {...propsForSearchResultPage} />
    </div>
  );
}

export default SearchedFood;

// restaurants.forEach((restaurant) => {
//   restaurant.cuisines.forEach((cuisine) => {
//     // console.log(restaurant.cuisines);
//     if (cuisine.toLowerCase().includes(foodName.toLowerCase())) {
//       // console.log(cuisine.includes(foodName));
//       //console.log(restaurant.name);
//       if (!matchedRestaurants.includes(restaurant.name)) {
//         matchedRestaurants.push(restaurant.name);
//         matchedStarRatings.push(restaurant.avgRatingString);
//         matchedIds.push(restaurant._id);
//         if (restaurant.latitude) matchedLats.push(restaurant.latitude);
//         if (restaurant.longitude) matchedLongs.push(restaurant.longitude);
//       }
//     }
//   });
// });

// setMatchedStarRatings(matchedStarRatings);
// setMatchedIds(matchedIds);
// setMatchedLats(matchedLats);
// setMatchedLongs(matchedLongs);

// console.log(matchedRestaurants);
// console.log(matchedStarRatings);
// console.log(matchedIds);

// import React, { useEffect, useState, useRef } from "react";
// import { useLocation } from "react-router-dom";
// import SearchResultPage from "./SearchResultPage";

// // TrieNode class representing a node in the Trie
// class TrieNode {
//   constructor() {
//     this.children = new Map(); // Map to store child nodes
//     this.isEndOfWord = false; // Flag to indicate end of a word
//     this.restaurants = []; // Array to store restaurants associated with the word
//   }
// }

// // Trie class representing the Trie data structure
// class Trie {
//   constructor() {
//     this.root = new TrieNode(); // Root node of the Trie
//   }

//   // Function to insert a word into the Trie
//   insert(word, restaurant) {
//     let node = this.root;
//     for (let char of word.toLowerCase()) {
//       if (!node.children.has(char)) {
//         node.children.set(char, new TrieNode());
//       }
//       node = node.children.get(char);
//     }
//     node.isEndOfWord = true;
//     node.restaurants.push(restaurant);
//   }

//   // Function to search for words in the Trie
//   search(query) {
//     const matchedRestaurants = [];
//     let node = this.root;

//     for (let char of query.toLowerCase()) {
//       if (!node.children.has(char)) {
//         return []; // No matching words
//       }
//       node = node.children.get(char);
//     }

//     // Traverse the subtree rooted at the last character of the query
//     this.traverse(node, matchedRestaurants);
//     return matchedRestaurants;
//   }

//   // Recursive function to traverse the subtree rooted at a node
//   traverse(node, matchedRestaurants) {
//     if (node.isEndOfWord) {
//       // Add associated restaurants when reaching the end of a word
//       matchedRestaurants.push(...node.restaurants);
//     }

//     // Traverse child nodes
//     for (let [char, childNode] of node.children) {
//       this.traverse(childNode, matchedRestaurants);
//     }
//   }
// }

// function SearchedFood() {
//   const [restaurants, setRestaurants] = useState([]);
//   const [matchedRestaurants, setMatchedRestaurants] = useState([]);
//   const trie = useRef(new Trie()); // Ref to store Trie instance
//   const location = useLocation();
//   const foodName = location.state && location.state.searchText;

//   useEffect(() => {
//     getRestaurants();
//   }, []);

//   function getRestaurants() {
//     fetch("https://restaurant-project-rwmk.onrender.com/api/restaurants")
//       .then((res) => res.json())
//       .then((restaurants) => {
//         setRestaurants(restaurants);
//         preprocessData(restaurants);
//       })
//       .catch((err) => console.log(err));
//   }

//   function preprocessData(restaurants) {
//     restaurants.forEach((restaurant) => {
//       restaurant.cuisines.forEach((cuisine) => {
//         trie.current.insert(cuisine, restaurant);
//       });
//     });
//   }

//   function searchRestaurants(foodName) {
//     const matched = trie.current.search(foodName);
//     setMatchedRestaurants(matched);
//   }

//   useEffect(() => {
//     if (restaurants.length > 0 && foodName) {
//       searchRestaurants(foodName.toLowerCase());
//     }
//   }, [restaurants, foodName]);

//   const propsForSearchResultPage = {
//     matched: matchedRestaurants,
//     foodName: foodName
//   };

//   return (
//     <div>
//       <SearchResultPage {...propsForSearchResultPage} />
//     </div>
//   );
// }

// export default SearchedFood;
