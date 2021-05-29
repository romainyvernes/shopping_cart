import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';
import cartLogo from '../assets/shopping-cart.svg';

const Nav = (props) => {
  const { cart } = props;
  
  return (
    <nav>
      <h1><Link to='/'>Blu-Ray Shop</Link></h1>
      <ul>
        <li>
          <Link to='/shop/all'>Store</Link>
        </li>
        <li>
          <Link to='/cart'>
            <div className='nav-cart'>
              <img src={cartLogo} alt='Shopping cart logo' />
              <span>
                {cart.reduce((total, item) => {
                  total += item.count;
                  return total;
                }, 0)}
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
