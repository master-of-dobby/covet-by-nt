import { Link, useNavigate } from "react-router-dom";

function HomePageFood(props) {
  const { foodName, url } = props;
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/searchedrestaurants", { state: { foodName } });
  };

  return (
    <div className="container-images" onClick={handleImageClick}>
      {/* <Link to={{ pathname: "/searchedrestaurants", state: { foodName } }}> */}
      <img className="home-food-img" src={url} alt={foodName} />
      {/* </Link> */}
    </div>
  );
}

export default HomePageFood;
