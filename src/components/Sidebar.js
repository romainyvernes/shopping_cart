import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h2><Link to='/shop/all'>All releases</Link></h2>
      <h2><Link to='/shop/movies'>Movies</Link></h2>
      <h2><Link to='/shop/tv'>TV Shows</Link></h2>
    </div>
  );
};

export default Sidebar;
