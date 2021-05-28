import React from 'react';
import Cover from './Cover';

const Cart = (props) => {
  const { cart } = props;
  
  return (
    <div className='cart'>
      {cart.length > 0
        ? cart.map((item) => (
            <div key={item.id}>
              <Cover 
                path={item.poster_path} 
                name={item.original_title || item.name} 
              />
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
