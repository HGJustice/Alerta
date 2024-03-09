import React, { useEffect, useState } from "react";
import { Text, ActivityIndicator } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

const GetLocation = ({ setCurrentLocation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await requestForegroundPermissionsAsync();
        if (status !== "granted") {
          throw new Error("Permission to access location was denied");
        }

        const { coords } = await getCurrentPositionAsync({});
        setCurrentLocation((prev) => {
          return {
            img: prev.img,
            latitude: coords.latitude,
            longitude: coords.longitude,
          };
        });
        setLoading(false);
      } catch (error) {
        console.error("Error getting location:", error);
        setLoading(false);
      }
    };

    getLocation();
  }, [setCurrentLocation]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <Text>
      {setCurrentLocation
        ? `Latitude: ${setCurrentLocation.latitude}, Longitude: ${setCurrentLocation.longitude}`
        : "Unable to fetch location."}
    </Text>
  );
};

export default GetLocation;
