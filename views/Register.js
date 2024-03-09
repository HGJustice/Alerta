import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/0_Atoms/Buttons/CustomButton";
import CustomInput from "../components/CustomInput";

function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.register__title}>Register Screen</Text>
      <CustomInput placeholder={"Email"} style={styles.input} />
      <CustomInput placeholder={"Password"} style={styles.input} />
      <CustomInput
        placeholder={"Repeat Password"}
        style={styles.registerScreen__input}
      />
      <CustomButton title={"Submit"} style={styles.registerScreen__button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  register__title: {
    fontSize: 30,
    position: "absolute",
    top: 200,
    left: 0,
    right: 0,
    textAlign: "center",
  },

  registerScreen__input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    width: 200,
    textAlign: "center",
  },

  registerScreen__button: {
    height: 45,
    borderWidth: 1,
    padding: 10,
    width: 100,
    borderRadius: 30,
    textAlign: "center",
  },
});

export default RegisterScreen;
