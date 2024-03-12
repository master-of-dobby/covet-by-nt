function SearcheResults(props) {
  return (
    <>
      <div className="searched-res">
        <div className="searched-res-det">
          <div className="searched-res-name">{props.eachRes}</div>
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
