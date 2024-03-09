import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

function ForgotPasswordScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.forgotPassword__title}>Forgot Password</Text>
      <Text style={styles.forgotPassword__content}>
        Please input your email and the reset password link will be sent to your
        email
      </Text>
      <CustomInput placeholder={"Email"} style={styles.forgotPassword__input} />
      <CustomButton
        title={"Send Email"}
        style={styles.forgotPassword__button}
      />
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

  forgotPassword__title: {
    fontSize: 30,
    position: "absolute",
    top: 250,
    left: 0,
    right: 0,
    textAlign: "center",
  },

  forgotPassword__input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    width: 200,
    textAlign: "center",
  },

  forgotPassword__button: {
    height: 45,
    borderWidth: 1,
    padding: 10,
    width: 120,
    borderRadius: 30,
    textAlign: "center",
  },

  forgotPassword__content: {},
});

export default ForgotPasswordScreen;
