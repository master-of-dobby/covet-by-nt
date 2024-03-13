export function filterRestaurants(searchText, allRestaurants) {
  let filteredList = allRestaurants.filter((restaurant) => {
    return restaurant.cuisines.some((item) => {
      return item.toLowerCase().includes(searchText.toLowerCase());
    });
  });

  let resNames = filteredList.map((res) => res.name);

  //   console.log(`${searchText}` , " => " , JSON.stringify(filteredList, null, 2));
  //console.log(resNames);

  return filteredList;
}
