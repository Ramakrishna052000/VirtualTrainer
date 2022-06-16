import React, { useState } from 'react';
import Navbar from "./Navbar";
import Header from "./Header";
import About from './About';
import Service from './Services';
import Contact from './Contact';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Service/>
    <Contact/> 
    </>
  )
}

export default Home;