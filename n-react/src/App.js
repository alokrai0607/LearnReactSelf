
import "./App.css"; 

import Button from "./Component/Button";
import Avtar  from "./Component/Avtar";

function App() {
  const a = true;
  return (
    <div className="App">
     <h1>Namaste React</h1>

     <Button text = "Press me I am a Button" color = "blue"/>
     {/* <button>Click Me</button> */}
     <h5>{ a? "Verified-user":"User not Verified"}</h5>
      <Avtar />
      <h1>Alok rai</h1>
    </div>
    
  );
}

export default App;
