import React,{useRef, useState} from "react";
import {cart} from "./Data";


const Navbar=function(){
   
    const searchRef=useRef();
    const cartRef= useRef();
    const navbarRef=useRef();
    const loginFormRef=useRef();
    const searchHandler=()=>{
        searchRef.current.classList.toggle("active");
        cartRef.current.classList.remove("active");
        navbarRef.current.classList.remove("active");
        loginFormRef.current.classList.remove("active");
    };
    const cartHandler = () =>{
      cartRef.current.classList.toggle("active");
      searchRef.current.classList.remove("active");
      navbarRef.current.classList.remove("active");
      loginFormRef.current.classList.remove("active");
    };
    const navbarHandler = () =>{
      navbarRef.current.classList.toggle("active");
      cartRef.current.classList.remove("active");
      searchRef.current.classList.remove("active");
      loginFormRef.current.classList.remove("active");
    };
    const loginFormHandler = () =>{
      loginFormRef.current.classList.toggle("active");
      cartRef.current.classList.remove("active");
      searchRef.current.classList.remove("active");
      navbarRef.current.classList.remove("active");
    };
    const closeHandler = () =>{
      loginFormRef.current.classList.remove("active");
    };

      return <header className="header">
        <a href="#" className="logo"><span>F</span>oodie</a>
        <nav className="navbar" ref={navbarRef}>
        <a href="#home">home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
        </nav>

        {/* searching,shopping icons */}
        <div className="icons">
            <div className="fas fa-search" onClick={searchHandler}></div>
            <div className="fas fa-shopping-cart" onClick={cartHandler}></div>
            <div className="fas fa-user" id="login-btn" onClick={loginFormHandler}></div>
            <div className="fas fa-bars" id="menu-btn" onClick={navbarHandler}></div>
        </div>
        {/* search bar */}
        <div className="search-form" ref={searchRef}>
          <input type="search" placeholder="Search here..." id="search-box"/>
          <label htmlFor="search-box" className="fas fa-search"/>
        </div> 
        {/* cart-items */}
        <div className="cart-items-container" ref={cartRef}>
          {cart.map((item, index) => (
            <div className="cart-item" key={index * Math.random()}>
              <span className="fas fa-times"></span>
              <img src={item.img} alt="" />
              <div className="content">
                <h3>cart item 01</h3>
                <div className="price">$15.99/-</div>
              </div>
            </div>
          ))}
          <a href="#" className="btn">
            checkout now
          </a>
          </div>


        {/* login page */}
        <div className="login-form-container" ref={loginFormRef}>
        <i class="fas fa-times" id="form-close" onClick={closeHandler}></i>
        <form action="">
        <h3>login</h3>
        <input type="email" className="box" placeholder="enter your email"/>
        <input type="password" className="box" placeholder="enter your password"/>
        <input type="submit" value="login now" class="btn"/>
        <input type="checkbox" id="remember"/>
        <label for="remember">remember me</label>
        <p>forget password? <a href="#">click here</a></p>
        <p>don't have and account? <a href="#">register now</a></p>
      </form>
      </div>
      </header>
};
export default Navbar;
