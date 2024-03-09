// HomeScreen.js
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.app__header}>Stay Safe</Text>
      <CustomInput placeholder={"Login"} style={styles.loginStyle} />
      <CustomInput placeholder={"Password"} style={styles.loginStyle} />
      <CustomButton
        style={styles.loginButton}
        title={"Login"}
        onPress={() => navigation.navigate("Dashboard")}
      />
      <CustomButton
        title={"Forgot Password?"}
        onPress={() => navigation.navigate("ForgotPassword")}
      />
      <CustomButton
        title={"Don't have an account? Create here"}
        onPress={() => navigation.navigate("Register")}
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
  loginButton: {
    height: 45,
    borderWidth: 1,
    padding: 10,
    width: 100,
    borderRadius: 30,
    textAlign: "center",
  },
});

export default HomeScreen;
