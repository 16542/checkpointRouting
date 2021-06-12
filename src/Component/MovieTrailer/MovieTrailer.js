import React from "react";

function MovieTrailer({ data, match }) {
  var details = data.find((el) => el.title === match.params.title);
  var productData;

  if (details)
    productData = (
      <div>
        <h3> {details.title} </h3>
        <p>{details.description}</p>
        <hr />
        <iframe
          width="560"
          height="315"
          src={details.trailer}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />{" "}
      </div>
    );
  else productData = <h2> Sorry. Product doesnt exist </h2>;

  return <div>{productData}</div>;
}

export default MovieTrailer;
