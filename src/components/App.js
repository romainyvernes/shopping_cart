import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/App.css';
import Routes from './Routes';
import Nav from './Nav';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  
  const getReleases = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;

    try {
      const fetchMovies = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&US`
      );
      const movies = await fetchMovies.json();
      setMovies(movies.results);
  
      const fetchShows = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`
      );
      const shows = await fetchShows.json();
      setShows(shows.results);
    } catch (err) {
      console.error(err);
    }
  };
  
  useEffect(() => {
    getReleases();
  }, []);

  const [cart, setCart] = useState([]);

  const addToCart = (e) => {
    const releases = movies.concat(shows);

    for (let i = 0; i < releases.length; i++) {
      if (String(releases[i].id) === e.currentTarget.id) {
        setCart(cart.concat({
          count: 1,
          coverUrl: `https://image.tmdb.org/t/p/w300${releases[i].poster_path}`,
          id: releases[i].id,
        }));
        return;
      }
    }
  };

  const incrementCount = (e) => {
    const currentCart = [...cart];
    
    for (let i = 0; i < currentCart.length; i++) {
      if (String(currentCart[i].id) === e.currentTarget.id) {
        currentCart[i].count += 1;
        if (currentCart[i].count > 10) {
          currentCart[i].count = 10;
        }
        break;
      }
    }

    setCart(currentCart);
  };

  const decrementCount = (e) => {
    const currentCart = [...cart];
    
    for (let i = 0; i < currentCart.length; i++) {
      if (String(currentCart[i].id) === e.currentTarget.id) {
        currentCart[i].count -= 1;
        if (currentCart[i].count <= 0) {
          currentCart.splice(i, 1);
        }
        break;
      }
    }

    setCart(currentCart);
  };

  const handleCountChange = (e) => {
    const currentCart = [...cart];
    const { id, value } = e.currentTarget;
    
    for (let i = 0; i < currentCart.length; i++) {
      if (String(currentCart[i].id) === id) {
        currentCart[i].count = value;
        break;
      }
    }

    setCart(currentCart);
  };
  
  return (
    <Router>
      <Nav cart={cart} />
      <Routes 
        cart={cart} 
        movies={movies} 
        shows={shows} 
        addToCart={addToCart}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        handleCountChange={handleCountChange} />
    </Router>
  );
};

export default App;