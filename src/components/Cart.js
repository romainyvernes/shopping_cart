import React from 'react';
import { Link } from 'react-router-dom';
import Cover from './Cover';
import Counter from './Counter';
import '../styles/Cart.css';

const Cart = (props) => {
  const { 
    cart,
    incrementCount,
    decrementCount,
    handleCountChange,
  } = props;
  
  return (
    <div className='cart'>
      {cart.length > 0
        ? cart.map((item) => (
            <div key={item.id} className='cart-item'>
              <Link to={`/shop/${item.type}/${item.id}`}>
                <Cover 
                  path={item.poster_path} 
                  name={item.original_title || item.name} 
                />
              </Link>
              <div>
                <p className='cart-price'>${item.price}</p>
                <Counter
                  itemId={item.id}
                  count={item.count}
                  incrementCount={incrementCount}
                  decrementCount={decrementCount}
                  handleCountChange={handleCountChange}
                />
              </div>
            </div>
          ))
        : <div>
            <p>Your cart is currently empty.</p>
          </div>
      }
    </div>
  );
};

export default Cart;
