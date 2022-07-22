import React from 'react'
import Coolplace from './Coolplace';
import Dream from "./Dream";
import Slide from "./Slide";
import BeEarly from "./BeEarly";
import RemoteJob from './RemoteJob';
import WalkIn from './WalkIn';
import Career from './Career';

const Home = () => {
  return (
    <div>
      <Slide/>
      <Dream/>
      <Coolplace/>
      <BeEarly/>
      <RemoteJob/>
      <WalkIn/>
      <Career/>
    </div>
  )
}

export default Home