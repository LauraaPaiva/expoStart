import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

import ContadorV2 from "./src/components/ContadorV2/ContadorV2";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ContadorV2></ContadorV2>
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
    // textAlign: "center",
  },
});
