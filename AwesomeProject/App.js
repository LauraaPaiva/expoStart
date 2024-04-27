import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

import Familia from "./src/components/Relacao/Pai";
import Membro from "./src/components/Relacao/Filho";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Familia>
        <Membro nome="João" sobrenome="Paiva" />
        <Membro nome="José" sobrenome="Paiva" />
      </Familia>
      <Familia>
        <Membro nome="Pedro" sobrenome="Silva" />
        <Membro nome="Paulo" sobrenome="Silva" />
      </Familia>
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
