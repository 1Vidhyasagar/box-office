import React, { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import "./App.css";

const API_KEY = "api_key=fe104304b38f134fb117a2d5f3d4f660";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
const searchURL = `${BASE_URL}/search/movie?${API_KEY}`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const getColor = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };

  const handleSearch = () => {
    if (!searchTerm) {
      alert("Please enter something to search for.");
      return;
    }
    if (searchTerm) {
      fetch(searchURL + "&query=" + searchTerm)
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
        });
    } else {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
        });
    }
  };

  return (
    <div className="inner_content new_index mt-2 mx-3">
      <div className="media discover row">
        <div className="col-md-8 mx-auto">
          <div class="title text-center">
            <h3>BOX OFFICE</h3>
          </div>{" "}
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a movie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary bg-warning"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-warning text-center ">
        Discover the Magic of Cinema
      </h3>
      <div className="row ">
        {movies.map((movie) => (
          <div className="  col-md-4 " key={movie.id}>
            <MovieCard movie={movie} getColor={getColor} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
