import { useNavigate } from "react-router-dom";

function SearcheResults(props) {
  const navigate = useNavigate();

  const handleSearch = (id) => {
    // console.log("handle search", id
    navigate(`/restaurant/${id}`);
  };

  return (
    <>
      <div className="searched-res">
        <div className="searched-res-det">
          <div
            className="searched-res-name"
            onClick={() => handleSearch(props.rid)}
          >
            {props.eachRes}
          </div>
          <div className="searched-res-ratings">{props.starRating} ⭐</div>
          <div className="searched-res-direction">
            <button className="searched-res-direction-btn">Direction ↗️</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearcheResults;
