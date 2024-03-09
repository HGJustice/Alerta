

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../0_Atoms/Buttons/CustomButton";


export default function UserInfo({ navigation }) {
  return (
    <View style={styles.UserInfo}>
      <CustomButton
        title={"TEST BUTTON"}
        style={styles.HomeScreen__button}
        // onPress={() =>
        //   navigation.navigate('Login')
        // }
      />

    </View>
  )
}



const styles = StyleSheet.create({
  UserInfo: {
    height: '50%',
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