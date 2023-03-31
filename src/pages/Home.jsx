import React, { useState, useEffect } from "react";
import { api } from "../Lib/Api";
import { Cards } from "../components/Cards";
import { Header } from "../components/header";

export function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    api.get()
      .then(response => {
        setMovies(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSearchInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const results = movies.filter(movie => {
      const castName = movie.cast_name.toLowerCase();
      const name = movie.name.toLowerCase();
      const term = searchTerm.toLowerCase();
      return castName.includes(term) || name.includes(term);
    });
    setSearchResults(results);
  };

  return (
    <div className="home">
      <Header />
      <div className="search-bar-container">
        <input className="input-style" type="text" value={searchTerm} onChange={handleSearchInputChange} />
        <button className="btn" onClick={handleSearch}>Buscar</button>
      </div>
      <div className="cards-container">
      {
        searchResults.length > 0
          ? searchResults.map(movie => <Cards key={movie.id} movie={movie} />)
          : movies.map(movie => <Cards key={movie.id} movie={movie} />)
      }
      </div>
     
    </div>
  );
}
