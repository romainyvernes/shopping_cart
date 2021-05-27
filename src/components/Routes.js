import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Store from './Store';
import Cart from './Cart';
import Home from './Home';
import Cover from './Cover';

const Routes = (props) => {
  const { 
    cart, 
    movies, 
    shows, 
    addToCart, 
    incrementCount, 
    decrementCount,
    handleCountChange,
  } = props;
  
  return (
    <Switch>
      <Route exact path='/' render={(props) => (
        <Home {...props} movies={movies} shows={shows} />
      )} 
      />
      <Route exact path='/shop/:type' render={(props) => (
        <Store {...props} movies={movies} shows={shows} />
      )} 
      />
      <Route path='/shop/:type/:id' render={(props) => (
        <Cover 
          {...props} 
          addToCart={addToCart} 
          cart={cart} 
          incrementCount={incrementCount}
          decrementCount={decrementCount}
          handleCountChange={handleCountChange} />
      )} 
      />
      <Route path='/cart' render={(props) => (
        <Cart {...props} cart={cart} />
      )} 
      />
    </Switch>
  );
};

export default Routes;
