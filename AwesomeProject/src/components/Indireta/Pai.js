import React, { Fragment, useState } from "react";
import { View, Text } from "react-native";

import Filho from "./Filho";

export default (props) => {
  const [text, setTexto] = useState("");
  const [num, setNum] = useState(0);

  function exibirValor(texto, numero) {
    setTexto(texto);
    setNum(numero);
  }
  return (
    <Fragment>
      <Text>
        {text} {num}
      </Text>
      <Filho min={1} max={100} funcao={exibirValor} />
    </Fragment>
  );
};
