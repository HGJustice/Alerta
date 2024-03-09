import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView from "react-native-maps";

function Map() {
  return <MapView style={styles.map}></MapView>;
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
