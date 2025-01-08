import React,{useState} from "react"
const Exo1 = ({chatMsg,name,sendMsg}) => {
    const [ msg,setMsg] =useState(" ")
    const handleValue = (event) =>{
        setMsg(event.target.value)
    }
    const handleSubmit = () =>{
        sendMsg(msg);
    }
    return (
        <div>  
            <h1>{name}</h1>
            <input type="text" placeholder="ecrire un message" onChange={handleValue}  value={msg} />
            <button type="submit"  onClick={handleSubmit}>Envoyer</button>
            <h2>message</h2>
            <p>{chatMsg}</p>
            
        </div>
    );
};

export default Exo1;