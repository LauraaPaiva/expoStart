import React from "react";
import { Text, View } from "react-native";
import estilo from "./estilo";

export default (props) => {
  return (
    <View>
      <Text style={estilo.tituloPrincipal}>{props.principal}</Text>
      <Text style={estilo.tituloSecundario}>{props.secundario}</Text>
    </View>
  );
};
