import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

import Quadrado from "./src/components/Layout/Quadrado";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Quadrado cor="#ff6e6e" />
      <Quadrado cor="#ff79c6" />
      <Quadrado cor="#4bf07b" />
      <Quadrado cor="#f1ed68" />
      <Quadrado cor="#82e9fd" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
