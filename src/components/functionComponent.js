import React, { useState } from 'react';


const FunctionalComp = () => {
  const [count, setCount] = useState(0);
  const [secCount, setSecCount] = useState(100);
  const [value, setValue] = useState('')
  const handleButtonCLick = (event) => {
    setCount(count + 1)
  }

  const handleButtonCLickDecrement = () => {
    setSecCount(secCount - 1)
  }

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue)
  }
  console.log('render');
  
  return (
    <div>
      <input value={value} type="text" onChange={handleInputChange}/>
      <button onClick={handleButtonCLick}>
        {`clicked:  ${count}`}
      </button>
      <button onClick={handleButtonCLickDecrement}>
      {`clicked:  ${secCount}`}
      </button>
    </div>
   
  )
}

export default FunctionalComp