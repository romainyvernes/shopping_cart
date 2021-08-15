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
      <button name='decrement' 
              id={itemId}
              onClick={decrementCount}
              className="button-bg primary-btn">
        -
      </button>
      <input type='number' 
             min='0' 
             max='10' 
             value={count} 
             onChange={handleCountChange} />
      <button name='increment button-bg' 
              id={itemId} 
              onClick={incrementCount}
              className="button-bg primary-btn">
        +
      </button>
    </div>
  );
};

export default Counter;
