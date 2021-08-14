import React from 'react';
import '../styles/Cover.css';

const Cover = (props) => {
  const { path, name } = props;
  
  return (
    <div className='cover cover-header-bg'>
      <p className='caption cover-font'>BLU-RAY</p>
      <img 
        src={`https://image.tmdb.org/t/p/w300${path}`} 
        alt={`${name} cover`}
      />
    </div>
  );
};

export default Cover;
