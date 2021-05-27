import React, { useState, useEffect } from 'react';

const Cover = (props) => {
  const { 
    addToCart, 
    cart, 
    incrementCount, 
    decrementCount, 
    handleCountChange, 
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
    <div>
      <div className='cover'>
        <p className='cover-caption'>BLU-RAY</p>
        <img 
          src={`https://image.tmdb.org/t/p/w300${release.poster_path}`} 
          alt={`${release.original_title || release.name} cover`} 
        />
      </div>
      <section>
        <p>{release.original_title || release.name}</p>
        {cart.find((item) => item.id === release.id)
          ? <div>
              <button 
                name='decrement' 
                id={release.id}
                onClick={decrementCount}
              >
                -
              </button>
              <input 
                type='number' 
                min='0' 
                max='10' 
                value={cart.find((item) => item.id === release.id).count} 
                onChange={handleCountChange} 
              />
              <button 
                name='increment' 
                id={release.id} 
                onClick={incrementCount}
              >
                +
              </button>
            </div>
          : <button id={release.id} onClick={addToCart}>Add to cart</button>
        }
      </section>
    </div>
  );
};

export default Cover;
