import React, { useState, useEffect } from "react";
import { api } from "../Lib/Api";
import { Cards } from "../components/Cards";
import { Header } from "../components/Header";

export function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    api.get()
      .then(response => {
        setMovies(response.data);
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
    setPage(0);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const moviesToShow = searchResults.length > 0 ? searchResults.slice(page * 10, (page + 1) * 10) : movies.slice(page * 10, (page + 1) * 10);

  return (
    <div className="home">
      <Header />
      <div className="search-bar-container">
        <input className="input-style" type="text" value={searchTerm} onChange={handleSearchInputChange} />
        <button className="btn" onClick={handleSearch}>Buscar</button>
      </div>
      <div className="cards-container">
        {moviesToShow.map(movie => <Cards key={movie.id} movie={movie} />)}
      </div>
      <div className="pagination">
        <button className="btn-befor" disabled={page === 0} onClick={handlePrevPage}>Anterior</button>
        <button className="btn-next" disabled={(page + 1) * 10 >= movies.length && (page + 1) * 10 >= searchResults.length} onClick={handleNextPage}>Próximo</button>
      </div>
    </div>
  );
}
