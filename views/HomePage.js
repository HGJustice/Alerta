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


function HomePage({ navigation }) {
  
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
      <Login navigation={navigation}/>
      <UserInfo navigation={navigation}/>
      <Map currentLocation={currentLocation} stranger={stranger} />
      <GetLocation setCurrentLocation={setCurrentLocation} />

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