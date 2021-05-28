import React from 'react';

const Cover = (props) => {
  const { path, name } = props;
  
  return (
    <div className='cover'>
      <p className='cover-caption'>BLU-RAY</p>
      <img 
        src={`https://image.tmdb.org/t/p/w300${path}`} 
        alt={`${name} cover`}
      />
    </div>
  );
};

export default Cover;
