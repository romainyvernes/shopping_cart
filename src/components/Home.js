import React from 'react';
import { Link } from 'react-router-dom';
import Cover from './Cover';

const Home = (props) => {
  const { movies, shows } = props;
  
  return (
    <div>
      <h1>Your Favorite TV Shows and Movies on Blu-Ray</h1>
      <div>
        <h2>Our top movie releases</h2>
        <div className='release-wrapper'>
          {movies.slice(0, 5).map((movie) => (
            <Link to={`/shop/movie/${movie.id}`} key={movie.id}>
              <Cover path={movie.poster_path} name={movie.original_title} />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h2>Our top TV show releases</h2>
        <div className='release-wrapper'>
          {shows.slice(0, 5).map((show) => (
            <Link to={`/shop/tv/${show.id}`} key={show.id}>
              <Cover path={show.poster_path} name={show.name} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
