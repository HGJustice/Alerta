// HomeScreen.js

import React, { useState } from "react";

import GetLocation from "../components/GetLocation";

import krystianImg from "../assets/krystian.jpg";
import katarinaImg from "../assets/kararinaBlyat.jpg";

import Map from "../components/Map";
import UserInfo from '../components/1_Molecues/UserInfo'


function View1() {

  
   const [currentLocation, setCurrentLocation] = useState({
    // latitude: 52.230476,
    // longitude: 20.9790455,
    latitude: null,
    longitude: null,
    img: katarinaImg,
  });

  const [stranger, setStranger] = useState({
    latitude: 52.230476,
    longitude: 20.9790452,
    img: krystianImg,
  });


  
  return (
      <>
        <UserInfo title={'view1'}/>
        <Map currentLocation={currentLocation} stranger={stranger} />
        <GetLocation setCurrentLocation={setCurrentLocation} />
      </>
  );
}

export default View1;