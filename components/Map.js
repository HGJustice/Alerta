import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
// import katarinaImg from "../assets/kararinaBlyat.jpg";
// import krystianImg from "../assets/krystian.jpg";

import MapView, { Marker } from "react-native-maps";

function Map({ currentLocation, stranger }) {
  // const [stranger, setStranger] = useState({
  //   latitude: 52.230476,
  //   longitude: 20.9790452,
  //   img: krystianImg,
  // });

  const [initialRegion, setInitialRegion] = useState({
    latitude: 52.2105,
    longitude: 20.8279,
    latitudeDelta: 5,
    longitudeDelta: 5,
  });

  useEffect(() => {
    console.log("change");
    if (currentLocation.longitude && currentLocation.latitude) {
      setInitialRegion({
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    }
  }, [currentLocation]);

  return (
    <MapView style={{ flex: 1 }} initialRegion={initialRegion}>
      {currentLocation.latitude && currentLocation.longitude && (
        <Marker
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
        >
          <View
            style={{
              width: 80,
              height: 80,
              backgroundColor: "#1AADDC",
              borderRadius: "50%",
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: "90%", height: "90%", borderRadius: 50 }}
              source={currentLocation.img}
              alt="Img"
            />
          </View>
        </Marker>
      )}
      {stranger && (
        <Marker
          coordinate={{
            latitude: stranger.latitude,
            longitude: stranger.longitude,
          }}
        >
          <View
            style={{
              width: 80,
              height: 80,
              backgroundColor: "#DC1A1A",
              borderRadius: "50%",
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: "90%", height: "90%", borderRadius: 50 }}
              source={stranger.img}
              alt="Img"
            />
          </View>
        </Marker>
      )}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    zIndex: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flex: 1,
  },
});
