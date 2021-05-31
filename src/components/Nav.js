import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';
import cartLogo from '../assets/shopping-cart.svg';

const Nav = (props) => {
  const { cart } = props;
  
  return (
    <nav>
      <Link to='/'><h1>Blu-Ray Shop</h1></Link>
      <ul>
        <Link to='/shop/all'><li>Store</li></Link>
        <Link to='/cart'>
          <li>
            <div className='nav-cart'>
              <img src={cartLogo} alt='Shopping cart logo' />
              <span>
                {cart.reduce((total, item) => {
                  total += item.count;
                  return total;
                }, 0)}
              </span>
            </div>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
