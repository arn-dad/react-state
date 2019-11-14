import React, { useState } from 'react';

const Counter = props => {
  const [ count, setCount ] = useState(0)

  const hendleCountClick = () => {
    setCount(
      count + 1
    )
  }

  return (
    <div>
      <button onClick={hendleCountClick}>{`clicked: ${count}`}</button>
    </div>
  );
};


export default Counter;