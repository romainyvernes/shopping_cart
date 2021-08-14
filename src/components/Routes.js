import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Store from './Store';
import Cart from './Cart';
import Home from './Home';
import Details from './Details';

const Routes = (props) => {
  const { 
    cart, 
    movies, 
    shows, 
    addToCart, 
    incrementCount, 
    decrementCount,
    handleCountChange,
    deleteItemFromCart,
  } = props;
  
  return (
    <Switch>
      <Route exact path='/' render={(props) => (
        <Home {...props} movies={movies} shows={shows} />
      )} 
      />
      <Route exact path='/shopping_cart/' render={(props) => (
        <Home {...props} movies={movies} shows={shows} />
      )} 
      />
      <Route exact path='/shop/:type' render={(props) => (
        <Store {...props} movies={movies} shows={shows} />
      )} 
      />
      <Route path='/shop/:type/:id' render={(props) => (
        <Details 
          {...props} 
          addToCart={addToCart} 
          cart={cart} 
          movies={movies}
          shows={shows}
          incrementCount={incrementCount}
          decrementCount={decrementCount}
          handleCountChange={handleCountChange} 
        />
      )} 
      />
      <Route path='/cart' render={(props) => (
        <Cart 
          {...props} 
          cart={cart}
          incrementCount={incrementCount}
          decrementCount={decrementCount}
          handleCountChange={handleCountChange}
          deleteItemFromCart={deleteItemFromCart}
        />
      )} 
      />
    </Switch>
  );
};

export default Routes;
