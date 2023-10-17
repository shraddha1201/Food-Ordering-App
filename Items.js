import React,{useState} from "react";
import {cart} from "./Data";
function Items (){
  const [count,setCount]= useState(0);
  function increase(){
    setCount(count+1);
  }
  function decrease(){
    setCount(count-1);
  }
    return
    <div>
        {cart.map((item,index)=>(
          <div className="cart-item" key={index}>
          <span className="fas fa-times"></span>
          <img src={props.img} alt="" />
          <div className="content">
          <h3>{item.title}</h3>
          <button onClick={decrease}>-</button>
          <span>{item.quantity}</span>
          <button onClick={increase}>+</button>
          <div className="price">{item.price}</div>
          </div>
        </div>))}
    </div>;
}

export default Items;
// vighna harta mantra
// wednesday- haldi chawal ka tikka duba

// feedback question
// what is the work-role
// are they train about role