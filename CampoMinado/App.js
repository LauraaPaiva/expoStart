import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import params from "./src/params";
import Field from "./src/components/Field";
import Flag from "./src/components/Flag";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Campo Minado</Text>
        {params.getColumnsAmount()} x {params.getRowsAmount()}
        <StatusBar style="auto" />
        <Field />
        <Field opened />
        <Field opened />
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={3} />
        <Field opened nearMines={4} />
        <Field opened nearMines={5} />
        <Field opened nearMines={6} />
        <Field opened nearMines={7} />
        <Field mined />
        <Field opened mined />
        <Field opened mined exploded />
        <Field flagged />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c7fff5",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-around",
  },
});
