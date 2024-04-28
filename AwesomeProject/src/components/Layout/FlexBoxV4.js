import React from "react";
import { View, Text } from "react-native";
import estilo from "../estilo";

import Quadrado from "./Quadrado";

export default (props) => {
  return (
    <View style={estilo.flexV4}>
      <View
        style={{
          backgroundColor: "#ff79c6",
          height: "15%",
        }}
      >
        <Text>Teste 1</Text>
      </View>
      <View
        style={{
          backgroundColor: "#82e9fd",
          flexGrow: 1,
        }}
      >
        <Text>Teste 2</Text>
      </View>
      <View
        style={{
          backgroundColor: "#ff8715",
          flexGrow: 3,
        }}
      >
        <Text>Teste 3</Text>
      </View>
    </View>
  );
};
