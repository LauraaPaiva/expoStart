import React from "react";
import { View, Text } from "react-native";
import estilo from "./estilo";

export default (props) => {
  return (
    <Text style={estilo.txtGrande}>
      O número {props.num} é {(props.num || 0) % 2 === 0 ? "par" : "ímpar"}
    </Text>
  );
};
