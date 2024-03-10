import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import queryOpenAI from "../Apis/openAIQuery";
import katarinaImg from "../../assets/kararinaBlyat.jpg"; // Asumując, że ścieżka jest poprawna

export default function UserInfo2() {
  const [outputText, setOutputText] = useState("");
  const [buttonPressed, setButtonPressed] = useState(false);

  const COLOR = {
    red: "#DC1A1A",
  };
  const btnHeight = 70;
  const borderWidth = 5;

  const helpBtnArr = ["BLISCY", "OTOCZENIE"];

  const biometricDataArr = [
    { name: "Tętno", result: 20 },
    { name: "Ciśnienie", result: 70 },
  ];
  const biometricData = biometricDataArr.map((item, index) => {
    return (
      <View
        key={item.name}
        style={{
          width: 100,
          height: 50,
          flexDirection: "column",
          alignContent: "flex-start",
          justifyContent: "space-evenly",
          padding: 8,

          backgroundColor: "#F3F3F3",
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 12 }}>{item.name}</Text>
        <Text style={{ fontSize: 18, color: COLOR.red }}>
          {item.result}
          {index == 0 && " bmp"}
        </Text>
      </View>
    );
  });

  const helpBtn = helpBtnArr.map((item) => {
    return (
      <TouchableOpacity
        key={item}
        style={{
          height: btnHeight,
          borderWidth,
          borderColor: COLOR.red,
          justifyContent: "center",
          alignItems: "center",
          width: "45%",
          borderRadius: 8,
        }}
      >
        <Text style={{ fontSize: 20, color: COLOR.red }}>{item}</Text>
      </TouchableOpacity>
    );
  });

  const handleOpenAIQuery = async () => {
    try {
      const response = await queryOpenAI();
      if (response) {
        setOutputText(response);
        setButtonPressed(true);
      } else {
        setOutputText(
          " 1. Natychmiast zadzwoń na numer alarmowy i poproś o pomoc medyczną.\n" +
            "2. Sprawdź oddech i puls poszkodowanego.\n" +
            "3. Rozpocznij resuscytację krążeniowo-oddechową, jeśli nie ma tętna.\n" +
            "4. Unieś nogi poszkodowanego, aby poprawić krążenie.\n" +
            "5. Zachowaj spokój i wykonuj czynności ratunkowe do czasu przybycia służb medycznych.\n"
        );
        setButtonPressed(true);
      }
    } catch (error) {
      setOutputText(
        " 1. Natychmiast zadzwoń na numer alarmowy i poproś o pomoc medyczną.\n" +
          "2. Sprawdź oddech i puls poszkodowanego.\n" +
          "3. Rozpocznij resuscytację krążeniowo-oddechową, jeśli nie ma tętna.\n" +
          "4. Unieś nogi poszkodowanego, aby poprawić krążenie.\n" +
          "5. Zachowaj spokój i wykonuj czynności ratunkowe do czasu przybycia służb medycznych.\n"
      );
      setButtonPressed(true);
    }
  };

  const resetState = () => {
    setOutputText("");
    setButtonPressed(false);
  };

  const largeBtnStyle = {
    height: btnHeight,
    borderWidth,
    borderColor: COLOR.red,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",

    marginTop: 20,
    marginBottom: 20,
    borderRadius: 8,
  };

  return (
    <View style={buttonPressed ? styles.UserInfoAdvanced : styles.UserInfo}>
      <View style={styles.personalData}>
        <View style={styles.left}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            Katarzyna Nowak
          </Text>
          <Text style={{ fontSize: 14 }}>24 lat</Text>
        </View>
        <View style={styles.right}>
          <Image style={styles.img} source={katarinaImg} />
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 20 }}>{biometricData}</View>
      {!buttonPressed ? (
        <TouchableOpacity
          onPress={handleOpenAIQuery}
          style={{
            height: btnHeight,
            borderWidth,
            borderColor: COLOR.red,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",

            marginTop: 20,
            marginBottom: 20,
            borderRadius: 8,
            // marginTop: 20,
            // marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: COLOR.red,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Jestem na miejscu
          </Text>
        </TouchableOpacity>
      ) : (
        <>
          <TouchableOpacity
            style={largeBtnStyle}
            onPress={() => Alert.alert("Najbliższy AED")}
          >
            <Text
              style={{
                color: COLOR.red,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Gdzie jest AED
            </Text>
            {/* <Button
              title="Gdzie jest AED"
              // onPress={() => Alert.alert("Najbliższy AED")}
            /> */}
          </TouchableOpacity>

          {/* <TextInput
            style={styles.largeTextInput}
            // style={{
            //   backgroundColor: "#EDEDED",
            //   padding: 30,
            //   flexDirection: "column",
            //   alignItems: "center",
            // }}
            multiline={true}
            numberOfLines={4}
            editable={false}
            selectTextOnFocus={false}
            value={outputText}
          /> */}

          <View
            style={{
              backgroundColor: "#EDEDED",
              padding: 30,
              flexDirection: "column",
              justifyContent: "center",
              gap: 10,
              borderRadius: 8,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>ChatGPT</Text>
            <Text style={{ fontWeight: 500 }}>
              Wykoanj następujące czynności:
            </Text>
            <Text>{outputText}</Text>
          </View>

          <TouchableOpacity
            style={{
              width: "100%",
              padding: 10,
              // backgroundColor: "rgba(255, 0, 0, 0.3)",
              position: "relative",
              marginTop: 20,
            }}
          >
            <View
              style={{
                width: "60%",
                height: btnHeight * 0.8,
                backgroundColor: "rgba(255, 0, 0, .3)",
                position: "absolute",
                borderRadius: 8,
              }}
            />
            <View
              style={{
                width: "60%",
                height: btnHeight * 0.8,
                backgroundColor: "rgba(255, 0, 0, .3)",
                position: "absolute",
                right: 0,
                bottom: 0,
                borderRadius: 8,
              }}
            />
            <View
              style={{
                width: "100%",
                height: btnHeight,
                backgroundColor: COLOR.red,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontSize: 36, fontWeight: "bold", color: "#ffffff" }}
              >
                112
              </Text>
            </View>
          </TouchableOpacity>

          {/* <Button title="Resetuj" onPress={resetState} /> */}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  UserInfo: {
    zIndex: 1,
    // height: "30%",
    backgroundColor: "#fff",
    padding: 30,
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    borderRadius: "40px 40px 0 0",
  },
  UserInfoAdvanced: {
    zIndex: 1,
    // height: "70%",
    backgroundColor: "#fff",
    padding: 30,
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    borderRadius: 40,
  },
  largeTextInput: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "grey",
    width: "85%",
    height: 250,
    padding: 10,
  },

  personalData: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginBottom: 20,
    marginTop: 20,
    gap: 9,
  },
  left: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  },
  right: {
    width: 66,
    height: 66,
    backgroundColor: "#DC1A1A",
    borderRadius: "50%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "90%",
    height: "90%",
    borderRadius: 50,
  },
});
