import React, { Component } from 'react';
import "./Coin.css"
class Coin extends React.Component{
    static defaultProps={
        states: "front",
        alt: "front"
    }
    render(){
        return(
            <div className="Coin">
                <h1 className="Coin-title" >Let's Flip a Coin</h1>
                <img className="Coin-img" alt={this.props.alt} src={`marka-${this.props.states}.png`}/>
            </div>
        )
    }
}

export default Coin;