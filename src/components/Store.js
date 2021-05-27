import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Store = (props) => {
  const { type } = props.match.params;

  const onTypeClicked = () => {
    // logic to display movies or shows depending on the option selected in Sidebar
  };

  const [releases, setReleases] = useState([]);
  useEffect(() => {
    const movies = props.movies.map((movie) => {
      movie.type = 'movie';
      return movie;
    });
    const shows = props.shows.map((show) => {
      show.type = 'tv';
      return show;
    });
    
    switch (type) {
      case 'movies':
        setReleases(movies);
        break;
      case 'tv':
        setReleases(shows);
        break;
      case 'all':
        setReleases(movies.concat(shows));
        break;
      default:
        throw new Error();
    }
  }, []);
  
  return (
    <div>
      <Sidebar />
      <div>
        {releases.map((release) => (
          <div key={release.id} className='cover'>
            <Link 
              to={`/shop/${release.type}/${release.id}`}
            >
              <p className='cover-caption'>BLU-RAY</p>
              <img 
                src={`https://image.tmdb.org/t/p/w300${release.poster_path}`} 
                alt={`${release.original_title || release.name} cover`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
