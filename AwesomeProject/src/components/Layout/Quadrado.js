import React from "react";
import { View, Text } from "react-native";
// import estilo from "./estilo";

export default (props) => {
  const lado = props.lado || 30;
  return (
    <View
      style={{
        height: lado,
        width: lado,
        backgroundColor: props.cor || "#000",
      }}
    ></View>
  );
};
