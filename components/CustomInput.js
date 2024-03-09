import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

const CustomInput = ({ placeholder, style }) => {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {},
});

export default CustomInput;
