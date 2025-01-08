import './App.css'
import Exo1 from './components/Exo1'
import {useState} from "react"
function App() {


  const [m1,setM1]=useState("")
  const [m2,setM2]=useState("")

  
  return (
    <div className="App">
      <Exo1 name="Ali"    sendMsg={(m)=>{setM1(m)}} chatMsg={m2} />
      <Exo1 name="Mohamed" sendMsg={(m)=>{setM2(m)}} chatMsg={m1} />
      
    </div>
  )
}

export default App
