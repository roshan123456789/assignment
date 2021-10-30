import React, { useState } from 'react'
import Nav from './Components/Nav';
import Navbar from './Components/Navbar';
import Knowmore from './Components/Knowmore';
import Quicklink from './Components/Quicklink';
import Schedule from './Components/Schedule';
import Slide from "./Components/Slide";
import Count from './Components/Count';
import Mid from './Components/Mid';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Buissness from './Components/Buissness';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';
import Section from './Components/Section';
import Datastore from './Datastore';
const App = () => {
  const[uppernav,setuppernav]=useState(false);

  return (
    <>
  
    <div className="windowdiv">
    <Datastore.Provider value={{uppernav,setuppernav}}>
    <Nav/>
      <Navbar/>
      <Knowmore/>
      <Quicklink/>
      <Schedule/>
      <Slide/>
      <Count/>
      <Mid/>
      <Buissness/>
      <Section/>
      <Subscribe/>
      <Footer/>
      </Datastore.Provider>
      </div>

    </>
  )
}

export default App

