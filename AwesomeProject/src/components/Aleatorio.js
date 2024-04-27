import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default (props) => {
  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min) + min);
  return <Text style={estilo.txtGrande}>O valor aleatório é {aleatorio}</Text>;
};
