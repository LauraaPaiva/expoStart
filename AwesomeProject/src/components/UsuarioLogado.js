import React from "react";
import { View, Text } from "react-native";
import estilo from "./estilo";
import If from "./If";

export default (props) => {
  const usuario = props.usuario || {};
  return (
    <View>
      <If teste={usuario && usuario.nome && usuario.email}>
        <Text style={estilo.txtGrande}>Usuário Logado:</Text>
        <Text style={estilo.txtGrande}>
          {usuario.nome} - {usuario.email}
        </Text>
      </If>
    </View>
  );
};
