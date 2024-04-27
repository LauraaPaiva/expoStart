import React, { useState } from "react";
import { View, Text } from "react-native";
import estilo from "../estilo";

import ContadorDisplay from "./ContadorDisplay";
import ContadorBotoes from "./ContadorBotoes";

export default (props) => {
  const [num, setNum] = useState(0);

  const increment = () => setNum(num + 1);
  const decrement = () => setNum(num - 1);

  return (
    <View>
      <Text style={estilo.txtGrande}>ContadorV2</Text>
      <ContadorDisplay num={num} />
      <ContadorBotoes increment={increment} decrement={decrement} />
    </View>
  );
};
