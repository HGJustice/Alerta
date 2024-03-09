// HomeScreen.js
import React, {useState} from "react";
import { Animated, StatusBar, StyleSheet, Text, View } from "react-native";
import CustomButton from "./0_Atoms/Buttons/CustomButton";

const HomeScreen = ({ setViewType }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(true);

  const closeLoginPanel = (view) => {
   
    if(view == 'view1') {
      setViewType('view1')
    }
    if(view == 'view2') {
      setViewType('view2')
    }
    setIsLoginOpen(!isLoginOpen)
  }

  const styles = StyleSheet.create({
    container: {
      zIndex: 2,
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      left: 0,
      top: isLoginOpen ? '0' : '100%',
      width: '100%',
      height: '100%',
      transition: 'top 1s'
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

  return (
    <View style={styles.container}>
      <Text> Zaloguj sie / Wybierz widok</Text>
      <CustomButton />
      <CustomButton
        // title={"Zaloguj sie za pomoca Google"}
        title={'View 1'}
        style={styles.HomeScreen__button}
        onPress={() =>
          closeLoginPanel('view1')
        }
      />
      <CustomButton
        title={"View 2"}
        style={styles.HomeScreen__button}
        onPress={() =>
          closeLoginPanel('view2')
        }
      />
      <StatusBar style="auto" />
    </View>
  );
};



export default HomeScreen;
