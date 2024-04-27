import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import estilo from "./estilo";

export default (props) => {
  const [nome, setNome] = useState("Nome");
  return (
    <View>
      <Text>{nome}</Text>
      <TextInput
        placeholder="Digite seu Nome"
        value={nome}
        onChangeText={(nome) => setNome(nome)}
      />
    </View>
  );
};
