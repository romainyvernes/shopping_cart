import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h2>
        <NavLink to='/shop/all' activeClassName='selected'>All releases</NavLink>
      </h2>
      <h2>
        <NavLink to='/shop/movies' activeClassName='selected'>Movies</NavLink>
      </h2>
      <h2>
        <NavLink to='/shop/tv' activeClassName='selected'>TV shows</NavLink>
      </h2>
    </div>
  );
};

export default Sidebar;
