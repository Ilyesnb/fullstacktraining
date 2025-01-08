import React from "react"
import {Component } from "react"
class Card extends Component {
    render() { 
        return (
            <div>
                <img style={{height:"100px",width:"100px" }} alt="" src= {this.props.image} />
                <h1>{this.props.name}</h1>
                <p>{this.props.prof}</p>
                <button onClick={ () => {alert(this.props.name)}} >
                    click
                </button>
            </div>
        );
    }
}
Card.defaultProps = {
    name:"unkown name",
    prof:"nothing to write",
    image:"./logo512.png",
}
export default Card;

