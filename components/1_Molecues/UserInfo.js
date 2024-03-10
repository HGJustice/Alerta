

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../0_Atoms/Buttons/CustomButton";


export default function UserInfo({ title }) {
  return (
    <View style={styles.UserInfo}>
      <Text>{title}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  UserInfo: {
    zIndex: 1,
    height: '30%',
    backgroundColor: '#fff',
    padding: 30,
    width: '100%',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    bottom: 0,
    borderRadius: '40px 40px 0 0'
  },
})