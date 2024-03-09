// HomeScreen.js
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map";

function DashboardScreen() {
  return (
    <SafeAreaView>
      <View>
        <Map />
      </View>
    </SafeAreaView>
  );
}

export default DashboardScreen;
