import axios from "axios";
import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
const { Meta } = Card;

function Containers() {
  const [characters, setCharacter] = useState([]);
 useEffect(()=>{
  axios.get("http://hp-api.herokuapp.com/api/characters").then((res)=>{
    const persons= res.data
    setCharacter(persons)

  })

 },[])
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      {characters.map((ele, index) => (
        <Card
          key={index}
          hoverable
          style={{ width: 240, marginLeft: "10px" }}
          cover={<img alt="example" src={ele.image} />}
        >
          <Meta title={ele.name} description={ele.actor}  />
        </Card>
      ))}
    </div>
  );
}

export default Containers;

