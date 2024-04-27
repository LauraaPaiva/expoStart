import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default function () {
  return <Text>Comp #Oficial</Text>;
}

export function Comp1() {
  return <Text style={estilo.txtPequeno}>Comp #01</Text>;
}

export function Comp2() {
  return <Text style={estilo.txtPequeno}>Comp #02</Text>;
}
