import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

import Mega from "./src/components/Mega/Mega";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Mega quantidadeDeNumeros={6} />
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
