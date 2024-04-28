import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

import FlexBoxV1 from "./src/components/Layout/FlexBoxV1";
import Quadrado from "./src/components/Layout/Quadrado";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlexBoxV1 />
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
