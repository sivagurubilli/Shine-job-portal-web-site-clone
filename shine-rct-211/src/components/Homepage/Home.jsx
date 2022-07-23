import React from 'react';
import Coolplace from './Coolplace';
import Dream from "./Dream";
import Slide from "./Slide";
import BeEarly from "./BeEarly";
import RemoteJob from './RemoteJob';
import WalkIn from './WalkIn';
import Career from './Career';
import Header from './Header';
import Searchbar from './Searchbar';
import { NavBar } from './NavBar';
import Footer from './Footer';

const Home = (home) => {
  return (
    <div>
      <Header/>
      <Searchbar/>
      <NavBar  home={home}/>
      <Slide/>
      <Dream/>
      <Coolplace/>
      <BeEarly/>
      <RemoteJob/>
      <WalkIn/>
      <Career/>
      <Footer/>
      
    </div>
  )
}

export default Home