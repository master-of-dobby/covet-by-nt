import React, { useState } from "react";
import SearcheResults from "./SearchResults";

function SearchResultPage({
  matched = [],
  matchedStarRatings = [],
  foodName,
  itemsPerPage,
  ids = [],
}) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, matched.length);

  // Filter matched and matchedStarRatings arrays based on the current page
  const displayedResults = matched.slice(startIndex, endIndex);
  const displayedRatings = matchedStarRatings.slice(startIndex, endIndex);
  const id = ids.slice(startIndex, endIndex);

  // Function to handle page navigation
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <div>
      <h1
        style={{ backgroundColor: "wheat", margin: "0px", paddingLeft: "2rem" }}
      >
        Results for ` {foodName} `
      </h1>

      {/* Render search results for the current page */}
      {displayedResults.map((rest, index) => (
        <SearcheResults
          rid={id[index]}
          key={startIndex + index} // Use a unique key for each item
          eachRes={rest}
          starRating={displayedRatings[index]}
        />
      ))}

      {/* Pagination */}
      <div className="pagination">
        <button
          className="pagination-btn"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span>Page {currentPage}</span>
        <button
          className="pagination-btn"
          onClick={nextPage}
          disabled={endIndex >= matched.length}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default SearchResultPage;
