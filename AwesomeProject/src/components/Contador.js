import React, { useState } from "react";
import { Text, Button } from "react-native";
import estilo from "./estilo";

export default ({ numeroInicial = 100, passo = 1 }) => {
  // let numero = props.numeroInicial;
  const [numero, setNumero] = useState(numeroInicial);

  return (
    <>
      <Text>{numero}</Text>
      <Button title="Incrementar" onPress={() => setNumero(numero + passo)} />
      <Button title="Decrementar" onPress={() => setNumero(numero - passo)} />
    </>
  );
};
