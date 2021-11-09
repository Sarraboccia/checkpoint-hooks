import React from "react";
import Moviecard from "../Moviecard/Moviecard";
import "./movieslist.css";

const Movielist = ({ movies, textFilter }) => {
  return (
    <div className="movies">
      {movies
        .filter((movie) =>
          movie.title.toLowerCase().includes(textFilter.toLowerCase())
        )
        .map((movie) => (
          <Moviecard movie={movie} />
        ))}
    </div>
  );
};

export default Movielist;
