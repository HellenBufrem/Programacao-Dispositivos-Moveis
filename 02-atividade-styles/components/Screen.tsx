import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Footer from "./Footer";
import Header from "./Header";
import NearYouSection from "./NearYouSection";

export default function Screen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header />

      <View style={styles.content}>
        <NearYouSection />
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  }
});