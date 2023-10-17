import React from "react";

function Card(props,addtoCart){
    return <div className="menubox" key={props.id}>
              <img src={props.img} alt="" />
              <div className="content">
              <h3>{props.title}</h3>
              <div className="price">{"₹"+props.price}</div>
              <a href="#" className="btn" onClick={()=>addtoCart(props)}>add to cart</a>
              </div>
            </div>
}
export default Card;