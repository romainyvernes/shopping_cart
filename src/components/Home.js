import React from 'react';
import { Link } from 'react-router-dom';
import Cover from './Cover';
import '../styles/Home.css';

const Home = (props) => {
  const { movies, shows } = props;
  
  return (
    <div className='home'>
      <section className='top-releases'>
        <h2 className="headings-bg"><Link to='/shop/movies'>Top movies</Link></h2>
        <ul className='release-list'>
          {movies.slice(0, 5).map((movie) => (
            <li key={movie.id}>
              <Link to={`/shop/movie/${movie.id}`}>
                <Cover path={movie.poster_path} name={movie.original_title} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className='top-releases'>
        <h2 className="headings-bg"><Link to='/shop/tv'>Top TV shows</Link></h2>
        <ul className='release-list'>
          {shows.slice(0, 5).map((show) => (
            <li key={show.id}>
              <Link to={`/shop/tv/${show.id}`}>
                <Cover path={show.poster_path} name={show.name} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
