import React, { Fragment } from "react";
import { View, Text, Button } from "react-native";

export default (props) => {
  function gerarNumero(min, max) {
    const aleatorio = parseInt(Math.random() * (max - min) + min);
    return aleatorio;
  }
  return (
    <Button
      title="Executar"
      onPress={function () {
        const texto = "Ganhador: ";
        const numero = gerarNumero(props.min, props.max);
        props.funcao(texto, numero);
      }}
    />
  );
};
