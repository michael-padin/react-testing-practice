import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <input type = "number" name = "amount" value = {amount}  onChange = {(e) => setAmount(parseInt(e.target.value))}/>
    </div>
  );
};

export default Counter;
