import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Cover from './Cover';

const Store = (props) => {
  const { type } = props.match.params;

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
  }, [type, props.movies, props.shows]);
  
  return (
    <div>
      <Sidebar />
      <div>
        {releases.map((release) => (
          <Link 
            to={`/shop/${release.type}/${release.id}`}
            key={release.id}
          >
            <Cover 
              path={release.poster_path} 
              name={release.original_title || release.name} 
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Store;
