import React from "react";
import { View, Text } from "react-native";
import estilo from "../estilo";

import Filho from "./Filho";

export default (props) => {
  return (
    <View>
      <Text style={estilo.txtGrande}>Membros da Família:</Text>
      {props.children}
    </View>
  );
};
