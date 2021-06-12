import React from "react";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
import "../MovieCard/MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div>
      <Card style={{ width: "300px" }}>
        <Card.Img
          style={{ width: "125px", marginLeft: "auto", marginRight: "auto" }}
          variant="top"
          src={movie.posterURL}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
        </Card.Body>
        <ReactStars
          style={{ marginLeft: "auto", marginRight: "auto" }}
          edit={false}
          size={30}
          value={movie.rating}
        />
        <Card.Body></Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
