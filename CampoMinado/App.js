import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import params from "./src/params";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Campo Minado</Text>
        {params.getColumnsAmount()} x {params.getRowsAmount()}
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
});
