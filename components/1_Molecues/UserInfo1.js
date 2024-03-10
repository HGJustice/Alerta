import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import CustomButton from "../0_Atoms/Buttons/CustomButton";
// import katarinaImg from "../assets/kararinaBlyat.jpg";
import katarinaImg from "../../assets/kararinaBlyat.jpg";

export default function UserInfo1() {
  const COLOR = {
    red: "#DC1A1A",
    blue: "#1AADDC",
  };
  const btnHeight = 70;
  const borderWidth = 5;

  const helpBtnArr = ["BLISCY", "OTOCZENIE"];

  const [biometricDataArr, setBiometricDataArr] = useState([
    { name: "Tętno", result: 82 },
    { name: "Ciśnienie", result: 120 },
  ]);

  const [currentColor, setCurrentColor] = useState("#DC1A1A");
  const [dangerousMode, setDangerousMode] = useState(false);

  useEffect(() => {
    if (dangerousMode) {
      setCurrentColor(COLOR.red);
      setBiometricDataArr([
        { name: "Tętno", result: 190 },
        { name: "Ciśnienie", result: 180 },
      ]);
    } else {
      setBiometricDataArr([
        { name: "Tętno", result: 82 },
        { name: "Ciśnienie", result: 120 },
      ]);
      setCurrentColor(COLOR.blue);
    }
  }, [dangerousMode]);

  useEffect(() => {
    let timerId;

    timerId = setTimeout(() => {
      setDangerousMode(true);
    }, 5000);

    return () => clearTimeout(timerId);
  }, []);

  const helpBtn = helpBtnArr.map((item) => {
    return (
      <TouchableOpacity
        key={item}
        style={{
          height: btnHeight,
          borderWidth,
          borderColor: currentColor,
          justifyContent: "center",
          alignItems: "center",
          width: "45%",
          borderRadius: 8,
        }}
      >
        <Text style={{ fontSize: 20, color: currentColor }}>{item}</Text>
      </TouchableOpacity>
    );
  });

  const seconds = 10;

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
          // paddingTop: 5,
          // paddingBottom: 5,
          // paddingLeft: 10,
          // paddingRight: 10,
          backgroundColor: "#F3F3F3",
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 12 }}>{item.name}</Text>
        <Text style={{ fontSize: 18, color: currentColor }}>
          {item.result}
          {index == 0 && " bmp"}
        </Text>
      </View>
    );
  });

  return (
    <View style={styles.UserInfo}>
      <View style={styles.personalData}>
        <View style={styles.left}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            Katarzyna Nowak
          </Text>
          <Text style={{ fontSize: 14 }}>24 lat</Text>
        </View>
        <View
          style={{
            width: 66,
            height: 66,
            backgroundColor: currentColor,
            borderRadius: "50%",
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image style={styles.img} source={katarinaImg} />
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 20 }}>{biometricData}</View>
      {dangerousMode && (
        <>
          <TouchableOpacity
            style={{
              width: "100%",
              height: btnHeight,
              // backgroundColor: "#ff0000",
              justifyContent: "center",
              alignItems: "center",
              borderWidth: borderWidth,
              borderColor: currentColor,
              borderRadius: 8,
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: COLOR.red }}
            >
              {seconds > 0 ? `${seconds}s ANULUJ WEZWANIE` : "Wezwano pomoc"}
            </Text>
          </TouchableOpacity>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {helpBtn}
          </View>

          <TouchableOpacity
            style={{
              width: "100%",
              padding: 10,
              // backgroundColor: "rgba(255, 0, 0, 0.3)",
              position: "relative",
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
                backgroundColor: currentColor,
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
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  UserInfo: {
    zIndex: 1,
    backgroundColor: "#fff",
    padding: 30,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    gap: 20,
    borderRadius: "40px 40px 0 0",
    paddingBottom: 50,
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
  // right: {
  // width: 66,
  // height: 66,
  // backgroundColor: currentColor,
  // borderRadius: "50%",
  // overflow: "hidden",
  // justifyContent: "center",
  // alignItems: "center",
  // },
  img: {
    width: "90%",
    height: "90%",
    borderRadius: 50,
  },
});
