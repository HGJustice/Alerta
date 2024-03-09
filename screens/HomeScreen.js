// HomeScreen.js
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.HomeScreen__logoContainer}>
        <Text style={styles.HomeScreen__title}>Logo</Text>
      </View>

      <View style={styles.HomeScreen__content}>
        <Text style={styles.HomeScreen__subtitle}> Zaloguj sie </Text>
        <CustomButton
          title={"Zaloguj sie za pomoca Google"}
          style={styles.HomeScreen__button}
          iconName={"google"}
          onPress={() => navigation.navigate("Dashboard")}
        />
        <CustomButton
          title={"Uzyj adresu e-mail"}
          style={styles.HomeScreen__button}
          iconName={"at"}
          iconSize={25}
        />
        <Text>
          Nie Masz Konta?{" "}
          <Text style={{ fontWeight: "bold" }}>Zarejestruj sie</Text>
        </Text>
        <CustomButton title={"Nie pamietasz hasla?"} />
        <StatusBar style="auto" />
      </View>
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
  HomeScreen__button: {
    borderWidth: 1,
    padding: 10,
    height: 62,
    width: 311,
    borderRadius: 15,
    textAlign: "center",
    justifyContent: "center",
  },
  HomeScreen__title: {
    fontSize: 70,
  },
  HomeScreen__logoContainer: {
    width: 211,
    height: 211,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 70,
    backgroundColor: "#D9D9D9",
    position: "relative",
    bottom: 50,
  },
  HomeScreen__content: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    top: 25,
  },
  HomeScreen__subtitle: {
    fontSize: 20,
  },
});

export default HomeScreen;
