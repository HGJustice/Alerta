// HomeScreen.js

import React, { useState } from "react";

import GetLocation from "../components/GetLocation";

import krystianImg from "../assets/krystian.jpg";
import katarinaImg from "../assets/kararinaBlyat.jpg";

import Map from "../components/Map";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import CustomButton from "../components/0_Atoms/Buttons/CustomButton";
import UserInfo from '../components/1_Molecues/UserInfo'
import Login from '../components/Login'
import View1 from "./View1";
import View2 from "./View2";


function HomePage({ navigation }) {
  const [viewType, setViewType] = useState('login')

  
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
    <View style={styles.HomePage}>
      <Login setViewType={setViewType}/>

      {/* View 1 */}
      {/* pojawia się na podstawie wyboru z loginu */}

      { viewType === 'view1' &&
      <>
        <View1 />
      </>}

      { viewType === 'view2' &&
      <>
        <View2 />
      </>}


    </View>
  );
}


const styles = StyleSheet.create({
  HomePage: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'relative',
    backgroundColor: '#ccc'
  },
});


export default HomePage;