import React from "react";
import { menu } from "./Data";
import Card from "./Card";

function CreateCard(items){
    return <Card key={items.id}
        title={items.title}
        img={items.img}
        price={items.price}
        />;
  };
function Menu(){
  
  return (
    <>
      <section className="menu" id="menu">

        <h1 class="heading">
        <span>o</span>
        <span>u</span>
        <span>r </span>
        <span class="space"></span>
        <span>m</span>
        <span>e</span>
        <span>n</span>
        <span>u</span>
        </h1>

        <div className="box-container">
          {menu.map(CreateCard)}
        </div>
      </section>
    </>
  );
};

export default Menu;
