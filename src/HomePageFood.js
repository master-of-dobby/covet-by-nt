function HomePageFood(props) {
  return (
    <div className="container-images">
      <img className="home-food-img" src={props.url} alt={props.foodName}></img>
    </div>
  );
}

export default HomePageFood;
