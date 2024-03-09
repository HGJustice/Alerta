// HomeScreen.js
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/0_Atoms/Buttons/CustomButton";
import CustomInput from "../components/CustomInput";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text> Zaloguj sie</Text>
      <CustomButton />
      <CustomButton
        title={"Zaloguj sie za pomoca Google"}
        style={styles.HomeScreen__button}
      />
      <CustomButton
        title={"Uzyj adresu e-mail"}
        style={styles.HomeScreen__button}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  app__header: {
    fontSize: 40,
    position: "absolute",
    top: 200,
    left: 0,
    right: 0,
    textAlign: "center",
  },
  loginStyle: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    width: 200,
    textAlign: "center",
  },
  HomeScreen__button: {
    borderWidth: 1,
    padding: 10,
    height: 62,
    width: 311,
    borderRadius: 30,
    textAlign: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
