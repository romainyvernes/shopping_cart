import React from 'react';
import { Link } from 'react-router-dom';
import Cover from './Cover';
import '../styles/Home.css';

const Home = (props) => {
  const { movies, shows } = props;
  
  return (
    <div className='home'>
      <div className='release-wrapper'>
        <h2><Link to='/shop/movies'>Top movie releases</Link></h2>
        <div className='release-subwrapper'>
          {movies.slice(0, 5).map((movie) => (
            <Link to={`/shop/movie/${movie.id}`} key={movie.id}>
              <Cover path={movie.poster_path} name={movie.original_title} />
            </Link>
          ))}
        </div>
      </div>
      <div className='release-wrapper'>
        <h2><Link to='/shop/tv'>Top TV show releases</Link></h2>
        <div className='release-subwrapper'>
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
