import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CustomButton from "../components/0_Atoms/Buttons/CustomButton";

function SosPanel() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Maciej Tomaszewski</Text>
    
      <CustomButton
        title={"Bang dang SOS"}
      />
    </View>
  );
}

const styles = StyleSheet.create({

});

export default SosPanel;
