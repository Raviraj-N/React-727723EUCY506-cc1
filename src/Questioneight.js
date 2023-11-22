import React, { Component } from 'react'

export default class Classdemo extends Component {
  constructor(props){
    super(props)
    this.state={count: 0}
  }
  incre = () =>{
    this.setState({count: this.state.count + 1})
  }
  decre = () =>{
    if(this.state.count >0){
    this.setState({count : this.state.count -1})
    }
    
  }
  handle = () =>{
    alert(this.state.count+" itme is ordered");
  }
  render() {
    return (
      <table>
      <tbody>
        <tr>
        <td><img src={this.props.img} alt={this.props.item}/></td>
        <td><p>{this.props.item}</p></td>
        <td><button onClick={this.incre}>+</button></td>
        <td>{this.state.count}</td>
        <td><button onClick={this.decre}>-</button></td>
        <td><button onClick={this.handle}>add to cart</button></td>
        </tr>
        </tbody>
        </table>
        
    )
  }
}