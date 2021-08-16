import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';
import cartLogo from '../assets/shopping-cart.svg';

const Nav = (props) => {
  const { cart } = props;
  
  return (
    <div className="navigation">
      <nav>
        <Link to="/shopping_cart/"><h1>Blu-Ray Shop</h1></Link>
        <ul className="regular-display">
          <li><Link to="/shop/all">Store</Link></li>
          <li className="cart-icon">
            <Link to='/cart'>
              <img src={cartLogo} alt="Shopping cart logo" />
              <span>
                {cart.reduce((total, item) => {
                  total += item.count;
                  return total;
                }, 0)}
              </span>
            </Link>
          </li>
        </ul>
        <a href="#" className="mobile">icon</a>
      </nav>
    </div>
  );
};

export default Nav;
