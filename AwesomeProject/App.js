import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

import UsuarioLogado from "./src/components/UsuarioLogado";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <UsuarioLogado
        usuario={{
          nome: "Laura",
          email: "lauraapaiva94@gmail.com",
        }}
      />
      <UsuarioLogado usuario={{ nome: "Laura" }} />
      <UsuarioLogado usuario={{ email: "lauraapaiva94@gmail.com" }} />
      <UsuarioLogado usuario={{}} />
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
