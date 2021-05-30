import React from 'react';
import '../styles/Counter.css';

const Counter = (props) => {
  const { 
    count, 
    itemId, 
    decrementCount, 
    handleCountChange, 
    incrementCount,
  } = props;
  
  return (
    <div className='counter'>
      <button 
        name='decrement' 
        id={itemId}
        onClick={decrementCount}
      >
        -
      </button>
      <input 
        type='number' 
        min='0' 
        max='10' 
        value={count} 
        onChange={handleCountChange} 
      />
      <button 
        name='increment' 
        id={itemId} 
        onClick={incrementCount}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
