// HomeScreen.js
import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";

import Map from "../components/Map";
import GetLocation from "../components/GetLocation";

import krystianImg from "../assets/krystian.jpg";
import katarinaImg from "../assets/kararinaBlyat.jpg";

function DashboardScreen() {
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
    <View style={{ flex: 1 }}>
      <Map currentLocation={currentLocation} stranger={stranger} />
      <GetLocation setCurrentLocation={setCurrentLocation} />
    </View>
  );
}

export default DashboardScreen;
