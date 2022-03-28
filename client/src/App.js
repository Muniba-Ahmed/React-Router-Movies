import React, { useState, useEffect } from "react";
import axios from "axios";

//step 2: React Router imports
import { Route, Link, Switch } from "react-router-dom";

//components used for the different routes
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";

import SavedList from "./Movies/SavedList";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5001/api/movies") // Study this endpoint with Postman
        .then((response) => {
          // console.log(response.data);
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data); //Step 3
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList
        list={
          [
            /* This is stretch */
          ]
        }
      />

      {/* <div>Step 4: Replace this Div with your Routes</div> */}
      <Route path="/">
        <MovieList movies={movieList} />
      </Route>
      <Route path="/movies/:id ">
        <Movie />
      </Route>
    </div>
  );
}
