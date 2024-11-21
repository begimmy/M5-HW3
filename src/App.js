import React, { useState } from 'react';

function App() {
 
  const [count, setCount] = useState(0);
 

  return (
    <div>
      <h1>{count}</h1> 
      <button onClick={() => setCount(count + 5)}>+5</button>
      <button onClick={() => {if (count > 0) {setCount(count - 5)}}}>-5</button>
    </div>
  );
}

export default App;