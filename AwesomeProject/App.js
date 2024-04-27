import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

import DigiteSeuNome from "./src/components/DigiteSeuNome";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <DigiteSeuNome />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff471",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
