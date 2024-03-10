import React, {useState} from "react";
import {Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
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
    { name: "Tętno", result: 190 },
    { name: "Ciśnienie", result: 180 },
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
        setButtonPressed(true)
      } else {
        setOutputText(' 1. Natychmiast zadzwoń na numer alarmowy i poproś o pomoc medyczną.\n' +
            '2. Sprawdź oddech i puls poszkodowanego.\n' +
            '3. Rozpocznij resuscytację krążeniowo-oddechową, jeśli nie ma tętna.\n' +
            '4. Unieś nogi poszkodowanego, aby poprawić krążenie.\n' +
            '5. Zachowaj spokój i wykonuj czynności ratunkowe do czasu przybycia służb medycznych.\n');
        setButtonPressed(true)
      }
    } catch (error) {
      setOutputText(' 1. Natychmiast zadzwoń na numer alarmowy i poproś o pomoc medyczną.\n' +
          '2. Sprawdź oddech i puls poszkodowanego.\n' +
          '3. Rozpocznij resuscytację krążeniowo-oddechową, jeśli nie ma tętna.\n' +
          '4. Unieś nogi poszkodowanego, aby poprawić krążenie.\n' +
          '5. Zachowaj spokój i wykonuj czynności ratunkowe do czasu przybycia służb medycznych.\n');
      setButtonPressed(true)
    }
  };

  const resetState = () => {
    setOutputText("");
    setButtonPressed(false);
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
                    style={{
                      height: 70,
                      borderWidth,
                      borderColor: COLOR.red,
                      justifyContent: "center",
                      alignItems: "center",
                      width: "45%",
                      borderRadius: 8,
                      marginTop: 10
                    }}
                >
                  <Button title="Jestem na miejscu" onPress={handleOpenAIQuery} />

                </TouchableOpacity>

        )

            :

            (
            <>
              <TouchableOpacity
                  style={{
                    height: 70,
                    borderWidth,
                    borderColor: COLOR.red,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "45%",
                    borderRadius: 8,
                    marginTop: 10
                  }}
              >
                <Button title="Gdzie jest AED" onPress={() => Alert.alert("Najbliższy AED")} />
              </TouchableOpacity>

              <TextInput
                  style={styles.largeTextInput}
                  multiline={true}
                  numberOfLines={4}
                  editable={false}
                  selectTextOnFocus={false}
                  value={outputText}
              />
              <Button title="Resetuj" onPress={resetState} />
            </>
        )}
      </View>
  );
}


const styles = StyleSheet.create({
  UserInfo: {
    zIndex: 1,
    height: "30%",
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
    height: "70%",
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
