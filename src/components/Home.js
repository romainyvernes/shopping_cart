import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  const { movies, shows } = props;
  
  return (
    <div>
      <h1>Your Favorite TV Shows and Movies on Blu-Ray</h1>
      <div>
        <h2>Our top movie releases</h2>
        <div className='release-wrapper'>
          {movies.slice(0, 5).map((movie) => (
            <div key={movie.id} className='cover'>
              <Link to={`/shop/movie/${movie.id}`}>
                <p className='cover-caption'>BLU-RAY</p>
                <img 
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
                  alt={`${movie.original_title} cover`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Our top TV show releases</h2>
        <div className='release-wrapper'>
          {shows.slice(0, 5).map((show) => (
            <div key={show.id} className='cover'>
              <p className='cover-caption'>BLU-RAY</p>
              <Link to={`/shop/tv/${show.id}`}>
                <img 
                  src={`https://image.tmdb.org/t/p/w300${show.poster_path}`} 
                  alt={`${show.name} cover`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
