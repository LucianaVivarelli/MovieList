export const Cards = ({ movie }) => {
  const { name, imdb_rating, genre, duration, img_link } = movie;

  return (
    
      <div className="cards">
        <div className="img-card-container">
          <img src={img_link} alt="movie-photo" />
        </div>
        <div className="description">
          <h4 className="movie-title"><span className="first-title">Filme:</span> {name}</h4>
       
          <p className="movie-type"><span className="first-title">Gênero:</span> {genre}</p>
       
          <p className="movie-class"><span className="first-title">Pontuação:</span> {imdb_rating}</p>
          <p className="movie-duration"><span className="first-title">Duração:</span> {duration} min</p>
        </div>
      </div>
   
  );
};
