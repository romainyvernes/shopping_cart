import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import Cover from './Cover';
import Counter from './Counter';
import '../styles/Details.css';

const Details = (props) => {
  const { 
    addToCart, 
    cart, 
    incrementCount, 
    decrementCount, 
    handleCountChange, 
    movies,
    shows,
  } = props;
  
  const { type, id } = props.match.params;
  
  const [release, setRelease] = useState({});
  
  const getRelease = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;

    try {
      const fetchRelease = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`
      );
      const releaseObj = await fetchRelease.json();

      movies.concat(shows).map((item) => (
        String(item.id) === id ? releaseObj.price = item.price : null
      ));

      setRelease(releaseObj);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRelease();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className='details'>
      <section>
        {/* header for mobile display only */}
        <header className="mobile">
          <h2>{release.original_title || release.name}</h2>
          <p className="info">
            <span>
              {release.genres
                ? release.genres.map((genre, index) => {
                    if (index > 0) return ', ' + genre.name;
                    return genre.name
                  })
                : null
              }
            </span>
            <span>{` | ${release.runtime || release.episode_run_time} min`}</span>
            <span> 
              {release.release_date
                ? ` | ${format(parseISO(release.release_date), 'd MMMM yyyy')}`
                : null
              }
              {release.first_air_date
                ? ` | ${format(parseISO(release.first_air_date), 'yyyy')} - ${format(parseISO(release.last_air_date), 'yyyy')}`
                : null
              }
            </span>
            <span> | {release.vote_average} / 10</span>
          </p>
          
        </header>

        {release.poster_path
          ? <Cover 
              path={release.poster_path} 
              name={release.original_title || release.name} 
            />
          : null
        }

        <article>
          <header className="regular-display">
            <h2>{release.original_title || release.name}</h2>
            <p className="info">
              <span>
                {release.genres
                  ? release.genres.map((genre, index) => {
                      if (index > 0) return ', ' + genre.name;
                      return genre.name
                    })
                  : null
                }
              </span>
              <span>{` | ${release.runtime || release.episode_run_time} min`}</span>
              <span> 
                {release.release_date
                  ? ` | ${format(parseISO(release.release_date), 'd MMMM yyyy')}`
                  : null
                }
                {release.first_air_date
                  ? ` | ${format(parseISO(release.first_air_date), 'yyyy')} - ${format(parseISO(release.last_air_date), 'yyyy')}`
                  : null
                }
              </span>
              <span> | {release.vote_average} / 10</span>
            </p>
            <hr/>
          </header>
          <p className='summary'>{release.overview}</p>
          <footer>
            <p className='price'>${release.price}</p>
            <div className="cart-btn">
              {cart.find((item) => item.id === release.id)
                ? <Counter 
                    itemId={release.id}
                    count={cart.find((item) => item.id === release.id).count}
                    handleCountChange={handleCountChange}
                    decrementCount={decrementCount}
                    incrementCount={incrementCount}  
                  />
                : <button name={type}
                          id={release.id} 
                          onClick={addToCart} 
                          className='add-to-cart button-bg primary-btn'>
                    Add to cart
                  </button>
              }
            </div>
          </footer>
        </article>
      </section>
    </div>
  );
};

export default Details;
