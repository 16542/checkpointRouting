import React from "react";
import ReactStars from "react-rating-stars-component";

function Filter({ handleSearche, rate }) {
  return (
    <div>
      <label>Search</label>{" "}
      <input
        name="forSearche"
        onChange={(e) => handleSearche(e.target.value)}
      />
      <div style={{ marginLeft: "40em", marginRight: "30em" }}>
        <ReactStars className="ReactStars" size={40} onChange={rate} />
      </div>
    </div>
  );
}

export default Filter;
