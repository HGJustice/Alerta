import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const CustomButton = ({
  title,
  onPress,
  style,
  textStyle,
  iconName,
  iconSize = 24,
  iconColor = "black",
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
        <View style={styles.buttonContent}>
          {iconName && (
            <FontAwesome name={iconName} size={iconSize} color={iconColor} />
          )}
          <Text
            style={[styles.text, textStyle, iconName && styles.textWithIcon]}
          >
            {title}
          </Text>
        </View>
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
    justifyContent: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {},
  textWithIcon: {
    flexDirection: "row",
  },
});

export default CustomButton;
