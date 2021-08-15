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
      {/* render cart items when cart is not empty */}
      {cart.length > 0
        ? <section className="filled">
            <ul>
              {cart.map((item, index) => (
                <li key={item.id} className='item'>
                  <article>
                    <div className="item-cover">
                      <Link to={`/shop/${item.type}/${item.id}`}>
                        <Cover 
                          path={item.poster_path} 
                          name={item.original_title || item.name} 
                        />
                      </Link>
                    </div>
                    <div className='purchase-info'>
                      <p className='price'>${item.price}</p>
                      <div className='counter-controls'>
                        <Counter
                          itemId={item.id}
                          count={item.count}
                          incrementCount={incrementCount}
                          decrementCount={decrementCount}
                          handleCountChange={handleCountChange}
                        />
                        <button id={item.id} 
                                className='delete button-bg primary-btn' 
                                onClick={deleteItemFromCart}>
                          Delete
                        </button>
                      </div>
                    </div>
                  </article>
                  {/* add horizontal line when cart item is not last in the list */}
                  {index !== cart.length - 1 ? <hr/> : null}
                </li>
              ))}
            </ul>
            <article className='checkout'>
              <p className='subtotal'>
                Subtotal (<span>{cart.reduce((total, item) => {
                  total += item.count;
                  return total;
                }, 0)}</span> item(s)): $<span>{cart.reduce((total, item) => {
                  total += item.count * item.price;
                  return total;
                }, 0)}</span>
              </p>
              <button className='checkout-btn button-bg primary-btn' 
                      onClick={checkout}>
                Checkout
              </button>
            </article>
          </section>
        : <section className='empty'>
            <p>Your cart is currently empty.</p>
          </section>
      }
    </div>
  );
};

export default Cart;
