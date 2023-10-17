import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Review from './Review';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
        <div>
        <Navbar/>   
        <Home />
        <About />
        <Menu />
        <Review />
        <Contact />
        <Footer />
        </div>
  );
}

export default App;
