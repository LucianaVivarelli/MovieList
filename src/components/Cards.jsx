export const Cards = ({ movie }) => {
  const { name, imdb_rating, genre, duration, img_link } = movie;

  return (
    
      <div className="cards">
        <div className="img-card-container">
          <img src={img_link} alt="movie-photo" />
        </div>
        <div className="description">
          <span className="movie-title">{name}</span>
       
          <span className="movie-type">Genero:{genre}</span>
       
          <span className="movie-class">{imdb_rating}</span>
          <span className="movie-duration">{duration} min</span>
        </div>
      </div>
   
  );
};
