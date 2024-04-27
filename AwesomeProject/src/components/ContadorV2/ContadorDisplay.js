import React from "react";
import { View, Text } from "react-native";
import estilo from "../estilo";

export default (props) => {
  return (
    <View style={estilo.display}>
      <Text style={[estilo.txtGrande, estilo.displayText]}>{props.num}</Text>
    </View>
  );
};
