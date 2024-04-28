import React from "react";
import { View, Text } from "react-native";
import estilo from "../estilo";

import Quadrado from "./Quadrado";

export default (props) => {
  return (
    <View style={estilo.flexV3}>
      <Quadrado cor="#ff6e6e" lado={10} />
      <Quadrado cor="#ff79c6" lado={20} />
      <Quadrado cor="#4bf07b" lado={30} />
      <Quadrado cor="#f1ed68" lado={40} />
      <Quadrado cor="#82e9fd" lado={50} />
    </View>
  );
};
