import React from "react";
import { review } from "./Data";
const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
        <span>c</span>
        <span>u</span>
        <span>s</span>
        <span>t</span>
        <span>o</span>
        <span>m</span>
        <span>e</span>
        <span>r</span>
        <span>'</span>
        <span>s</span>
        <span className="space"> </span>
        <span>r</span><span>e</span><span>v</span><span>i</span><span>e</span><span>w</span>
        </h1>

        <div className="box-container">
          {review.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={item.img} className="user" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nulla sit libero nemo fuga sequi nobis? Necessitatibus aut
                laborum.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;
