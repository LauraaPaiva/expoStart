import React from "react";
import { View, Text } from "react-native";
import estilo from "../estilo";

import Quadrado from "./Quadrado";

export default (props) => {
  return (
    <View style={estilo.flexV2}>
      <Quadrado cor="#ff6e6e" />
      <Quadrado cor="#ff79c6" />
      <Quadrado cor="#4bf07b" />
      <Quadrado cor="#f1ed68" />
      <Quadrado cor="#82e9fd" />
    </View>
  );
};
