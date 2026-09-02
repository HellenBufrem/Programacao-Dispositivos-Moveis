import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "./Button";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Button />
      <Button />
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 24,
  },
});
