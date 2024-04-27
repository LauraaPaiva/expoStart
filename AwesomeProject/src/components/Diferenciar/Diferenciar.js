import React from "react";
import { View, Text, Platform } from "react-native";
import estilo from "../estilo";

export default (props) => {
  if (Platform.OS === "android") {
    return <Text style={estilo.txtGrande}>Android</Text>;
  } else if (Platform.OS === "ios") {
    return <Text style={estilo.txtGrande}>iOS</Text>;
  } else {
    return (
      <Text style={estilo.txtGrande}>Sistema Operacional não encontrado.</Text>
    );
  }
};
