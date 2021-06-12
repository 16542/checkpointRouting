import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Component/MovieList/MovieList";
import Filter from "./Component/Filter/Filter";
import React, { useState } from "react";
import Add from "./Component/Add/Add";
import MovieCard from "./Component/MovieCard/MovieCard";
import { Route, Switch } from "react-router-dom";
import MovieTrailer from "./Component/MovieTrailer/MovieTrailer";

function App() {
  const listMovie = [
    {
      id: 1,
      title: "Infinite",
      description:
        "A man discovers that his hallucinations are actually visions from past lives.",
      posterURL:
        "https://www.ecranlarge.com/uploads/image/001/181/infinite-photo-1181373.jpg",
      rating: 2,
      trailer: "https://www.youtube.com/embed/_WWEOCQGxSw",
    },
    {
      id: 2,
      title: "Awake",
      description:
        "An expert After a devastating global event wipes out all electronics and eliminated people's ability to sleep, a former soldier may have found a solution with her daughter. is coaxed out of seclusion by colleagues who need his help to stop a plot to kill the president, but he gets framed for the crime.",
      posterURL:
        "https://www.avforums.com/styles/avf/editorial/block//7bab672602926908721cd6411fa6c2c8_3x3.jpg",
      rating: 3,
      trailer: "https://www.youtube.com/embed/2fuowcxdrYc",
    },
    {
      id: 3,
      title: "Infinite",
      description:
        "A man discovers that his hallucinations are actually visions from past lives.",
      posterURL:
        "https://www.ecranlarge.com/uploads/image/001/181/infinite-photo-1181373.jpg",
      rating: 2,
      trailer: "https://www.youtube.com/embed/_WWEOCQGxSw",
    },
    {
      id: 4,
      title: "Awake",
      description:
        "An expert After a devastating global event wipes out all electronics and eliminated people's ability to sleep, a former soldier may have found a solution with her daughter. is coaxed out of seclusion by colleagues who need his help to stop a plot to kill the president, but he gets framed for the crime.",
      posterURL:
        "https://www.avforums.com/styles/avf/editorial/block//7bab672602926908721cd6411fa6c2c8_3x3.jpg",
      rating: 3,
      trailer: "https://www.youtube.com/embed/2fuowcxdrYc",
    },
  ];

  const [search, setSearch] = useState("");
  const handleSearche = (x) => {
    setSearch(x);
  };
  const [searchByRate, setSearchByRate] = useState("");

  const handleSearchRating = (x) => {
    setSearchByRate(x);
  };
  const [Movies, setMovies] = useState(listMovie);
  const addMovie = (newMovie) => {
    setMovies([...Movies, newMovie]);
  };
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Add addMovie={addMovie} />
          <Filter handleSearche={handleSearche} rate={handleSearchRating} />

          <MovieList
            listMovie={Movies.filter(
              (el) =>
                el.title
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase()) &&
                el.rating >= searchByRate
            )}
          />
        </Route>
        <Route path="/MovieCard">
          <MovieCard />
        </Route>
        <Route
          path={"/:title"}
          render={(props) => <MovieTrailer {...props} data={listMovie} />}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
