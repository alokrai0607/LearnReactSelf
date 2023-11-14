
import "./App.css"; 

import Button from "./Component/Button";
import Avtar  from "./Component/Avtar";

function App() {
  const a = true;
  return (
    <div className="App">
     <h1>Namaste React</h1>

     <Button text = "I am a Button1" color = "blue" 
     handleClick={()=>console.log("clicked Button 1")}/>

     <Button text = "I am a Button2" color = "red" 
     handleClick={()=>console.log("clicked Button 2")}/>

     {/* <button>Click Me</button> */}


     <h5>{ a? "Verified-user":"User not Verified"}</h5>
      <Avtar name="Alok Rai" src="https://avatars.githubusercontent.com/u/112754692?v=4" 
       rounded ={false}
       age ={29} address = {{home : "saklenabad ,Ghazipur" ,
                             Office : "Fatehullahpur, Ghazipur"}}
                             hobbies = {["Chess","Coading"]}
                             />
      <Avtar name="Jack Bereson" src="https://avatars.githubusercontent.com/u/18569187?v=4" rounded={true} age ={25}
       address = {{home : "USA" ,
       Office : "United Kingdom"}}
       hobbies = {["Eat","Sleep"]}/>


      <Avtar name="HASAN YALSIZ" src="https://avatars.githubusercontent.com/u/132101909?v=4"rounded={false} age ={40}
       address = {{home : "Malesiya" ,
       Office : "HongKong"}}
       hobbies = {["Code","Gym"]}/>
      {/* <Avtar name="Name for Image" src="here you can add any image URL"/> */}
    </div>
    
  );
}

export default App;
