import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Cover from './Cover';
import '../styles/Store.css';

const Store = (props) => {
  const { type } = props.match.params;

  const [releases, setReleases] = useState([]);
  
  useEffect(() => {
    // add "type" key to both movies and shows
    const movies = props.movies.map((movie) => {
      movie.type = 'movie';
      return movie;
    });
    const shows = props.shows.map((show) => {
      show.type = 'tv';
      return show;
    });
    // update list of releases based on updates on "type"
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
    <div className='store'>
      <aside>
        <Sidebar />
      </aside>
      <section className='items'>
        <ul>
          {/* eslint-disable-next-line array-callback-return */}
          {releases.map((release) => {
            // filter out releases that do not include a poster
            if (release.poster_path) {
              return (
                <li key={release.id}>
                  <Link to={`/shop/${release.type}/${release.id}`}>
                    <Cover path={release.poster_path} 
                          name={release.original_title || release.name} />
                    <p className='price'>${release.price}</p>
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </section>
    </div>
  );
};

export default Store;
