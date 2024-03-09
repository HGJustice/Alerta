// HomeScreen.js
import React from "react";


import Map from "../components/Map";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import CustomButton from "../components/0_Atoms/Buttons/CustomButton";
import UserInfo from '../components/1_Molecues/UserInfo'
import Login from '../components/Login'


function HomePage({ navigation }) {
  return (
    <View style={styles.HomePage}>
      <Login navigation={navigation}/>
      <UserInfo navigation={navigation}/>
        <Map />
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