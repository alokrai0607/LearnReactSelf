import React, { useState } from "react";
import './App.css';

function App() {
  const [count,setCount] = useState(1);

  return (
    <div className="App">
     <h1>My Counter App</h1>
     <div>
       <h3 >count : {count}</h3>
      <div>
      <button onClick={() => setCount(count + 1)}style={{backgroundColor:"green"}}>Increment</button>
      <button onClick={() => setCount(count - 1)}style={{backgroundColor:"pink"}}>Decrement</button>
      <button onClick={() => setCount(count * 5)}style={{backgroundColor:"teal"}}>Multi</button>
      <button onClick={() => setCount(0)}>Reset</button>
      </div>
     </div>
    </div>
  );
}

export default App;
