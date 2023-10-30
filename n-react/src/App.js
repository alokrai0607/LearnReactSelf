
import './App.css';

import Button from "./Component/Button";

function App() {
  const a = false;
  return (
    <div className="App">
     <h1>Namaste React</h1>

     <Button text = "Press me I am a Button" color = "blue"/>
     {/* <button>Click Me</button> */}
     <h5>{ a? "Variable is true":"Variable is false"}</h5>
    </div>
  );
}

export default App;
