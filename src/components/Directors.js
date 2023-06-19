import React from "react";
import { directors } from "../data";

function Directors() {
  const mappedDirectors = directors.map((director) => {
    const mappedMovies = director.movies.map((movie) => {
      return <li key={movie}>{movie}</li>;
    });
    return (
      <div key={director.name}>
        <h2>{director.name}</h2>
        <ul>{mappedMovies}</ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Directors Page</h1>
      <>{mappedDirectors}</>
    </div>
  );
}

export default Directors;