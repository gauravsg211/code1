import React,{Component} from 'react';
import './Person.css';
class person extends Component{
   render(){

   return(
    <div className="P1">
       <h6>Card Number:{this.props.card_no}</h6>
   <p onClick={this.props.click}>i am {this.props.age} year old</p>
   <h1>{this.props.name}</h1>
   <h1>lets hope that my future in react development will be high, am not putting much effort in this as this game is tuffer</h1>
  
   <input type='text' onChange={this.props.changed} value={this.props.name}></input>
   <div className="link1">
   <p>{this.props.children}</p></div>
   
   </div>
 
   );
   }
};
export default person;