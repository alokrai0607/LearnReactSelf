
import "./App.css"; 

import Button from "./Component/Button";
import Avtar  from "./Component/Avtar";

const squredArr = [1,2,3,4,5].map((el)=><li>{el*3}</li>);
// console.log(squredArr);

const users = [
  {
    name : "Alok Rai", 
    src : "https://avatars.githubusercontent.com/u/112754692?v=4", 
    rounded : true,
    age : 29 

  },
  {
    name : "Jack Bereson", 
    src : "https://avatars.githubusercontent.com/u/18569187?v=4", 
    rounded : false,
    age : 50 

  },
  {
    name : "HASAN YALSIZ", 
    src : "https://avatars.githubusercontent.com/u/132101909?v=4", 
    rounded : true,
    age : 40 

  },
  {
    name : "HASAN YALSIZ", 
    src : "https://avatars.githubusercontent.com/u/132101909?v=4", 
    rounded : true,
    age : 40 

  }
];

const userAv = users.map((user)=>(
  <Avtar name={user.name} src={user.src} rounded={user.rounded}/>
));
console.log(userAv);

function App() {
  const a = true;
  return (
    <div className="App">
      <ul>{squredArr}</ul>
     <h1>Namaste React</h1>

     <Button text = "I am a Button1" color = "blue" 
     handleClick={()=>console.log("clicked Button 1")}/>

     <Button text = "I am a Button2" color = "red" 
     handleClick={()=>console.log("clicked Button 2")}/>

     {/* <button>Click Me</button> */}


     <h5>{ a? "Verified-user":"User not Verified"}</h5>
      {/* <Avtar name="Alok Rai" src="https://avatars.githubusercontent.com/u/112754692?v=4" 
       rounded ={true}
       age ={29} address = {{home : "saklenabad ,Ghazipur" ,
                             Office : "Fatehullahpur, Ghazipur"}}
                             hobbies = {["Chess","Coading"]}
                             />
      <Avtar name="Jack Bereson" src="https://avatars.githubusercontent.com/u/18569187?v=4" rounded={false} age ={25}
       address = {{home : "USA" ,
       Office : "United Kingdom"}}
       hobbies = {["Eat","Sleep"]}/>


      <Avtar name="HASAN YALSIZ" src="https://avatars.githubusercontent.com/u/132101909?v=4"rounded={false} age ={40}
       address = {{home : "Malesiya" ,
       Office : "HongKong"}}
       hobbies = {["Code","Gym"]}/> */}
      {/* <Avtar name="Name for Image" src="here you can add any image URL"/> */}

      {userAv}
    </div>
    
  );
}

export default App;
