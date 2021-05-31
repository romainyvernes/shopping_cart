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
    deleteItemFromCart,
  } = props;

  const checkout = () => {
    alert('Thank you for shopping with us!');
  };
  
  return (
    <div className='cart'>
      {cart.length > 0
        ? <div className='cart-items-wrapper'>
            {cart.map((item, index) => (
              <div key={item.id}>
                <div className='cart-item'>
                  <Link to={`/shop/${item.type}/${item.id}`}>
                    <Cover 
                      path={item.poster_path} 
                      name={item.original_title || item.name} 
                    />
                  </Link>
                  <div className='cart-price-wrapper'>
                    <p className='cart-price'>${item.price}</p>
                    <div className='cart-counter-controls'>
                      <Counter
                        itemId={item.id}
                        count={item.count}
                        incrementCount={incrementCount}
                        decrementCount={decrementCount}
                        handleCountChange={handleCountChange}
                      />
                      <button 
                        id={item.id} 
                        className='cart-delete' 
                        onClick={deleteItemFromCart}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                {index !== cart.length - 1 ? <hr/> : null}
              </div>
            ))}
          </div>
        : <div className='cart-empty'>
            <p>Your cart is currently empty.</p>
          </div>
      }
      {cart.length > 0
        ? <div className='cart-checkout-wrapper'>
            <div className='cart-subtotal-wrapper'>
              <p className='cart-subtotal-label'>
                Subtotal ( {cart.reduce((total, item) => {
                  total += item.count;
                  return total;
                }, 0)} item(s) ):
              </p>
              <p className='cart-subtotal-value'>
                ${cart.reduce((total, item) => {
                  total += item.count * item.price;
                  return total;
                }, 0)}
              </p>
            </div>
            <button className='cart-checkout-btn' onClick={checkout}>
              Checkout
            </button>
          </div>
        : null
      }
    </div>
  );
};

export default Cart;
