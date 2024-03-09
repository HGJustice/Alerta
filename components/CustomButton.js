import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

const CustomButton = ({ title, onPress, style, textStyle }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    alignItems: "center",
  },
});

export default CustomButton;
