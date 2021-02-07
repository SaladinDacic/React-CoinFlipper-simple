import React, { Component } from 'react';
import Coin from "./Coin";
import "./Flipper.css";

class Flipper extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            states: "front",
            title: "front",
            counts: 0,
            fronts : 0,
            backs : 0
        }
        this.flip = this.flip.bind(this);
        this.count = this.count.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    flip(){
        this.setState(currState=>{
            let random = Math.random()< 0.5;
            if(random){
                return {states: "back", title: "back"}
            }else{
                return {states: "front", title: "front"}
            }
        })
    }
    count(){
        this.setState(currState=>{
            let state = currState.states ==="front";
            if (state){
                return {fronts: currState.fronts + 1, counts: currState.counts + 1}
            }else{
                return {backs: currState.backs + 1, counts: currState.counts + 1}
            }
        })
    
    }
    handleClick(){
        this.flip();
        this.count();
    }
    render(){
        return(
            <div>
                <Coin states={this.state.states} alt={this.state.title}/>
                <button onClick={this.handleClick}>Flip Coin!</button>
                <p>{`Number of flips: ${this.state.counts}, heads: ${this.state.fronts}, backs: ${this.state.backs}`}</p>
            </div>
        )
    }
}

export default Flipper;