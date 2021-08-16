import React from 'react';
import { Link } from 'react-router-dom';
import Cover from './Cover';
import '../styles/Home.css';

const Home = ({ movies, shows }) => {

  const getTopFive = (items) => {
    let topFive = [];
    for (let i = 0; i < items.length; i++) {
      // end loop when topFive array contains 5 items
      if (topFive.length === 5) {
        break;
      }
      // add item to topFive array provided that it contains a poster
      if (items[i].poster_path) {
        topFive.push(items[i]);
      }
    }
    return topFive;
  };
  
  return (
    <div className='home'>
      <section className='top-releases'>
        <Link to='/shop/movies'>
          <h2 className="primary-background hovered-links">Top movies</h2>
        </Link>
        <ul className='release-list'>
          {getTopFive(movies).map((movie) => (
            <li key={movie.id}>
              <Link to={`/shop/movie/${movie.id}`}>
                <Cover path={movie.poster_path} name={movie.original_title} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className='top-releases'>
        <Link to='/shop/tv'>
          <h2 className="primary-background hovered-links">Top TV shows</h2>
        </Link>
        <ul className='release-list'>
          {getTopFive(shows).map((show) => (
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
