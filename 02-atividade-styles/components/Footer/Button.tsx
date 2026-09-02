import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Button() {
  return (
    <View style={styles.container}>
      <Entypo name="location-pin" size={24} color="black" />
      <Text>Check in</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
