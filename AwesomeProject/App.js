import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

import Blabla from "./src/components/Primeiro";
import Multi, { Comp1, Comp2 } from "./src/components/Multi";
import MinMax from "./src/components/MinMax";
import Aleatorio from "./src/components/Aleatorio";
import Titulo from "./src/components/Titulo";
import Botao from "./src/components/Botao";
import Contador from "./src/components/Contador";
import Pai from "./src/components/Direta/Pai";
import Filho from "./src/components/Direta/Filho";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Titulo principal="Meu primeiro App" secundario="Go!" />
      <StatusBar style="auto" />
      <Aleatorio min={1} max={100} />
      <Botao />
      <Contador numeroInicial={50} />
      <Pai />
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
    textAlign: "center",
  },
});
