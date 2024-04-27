import React, { Fragment } from "react";
import { View, Text, Button } from "react-native";
import estilo from "../estilo";

export default (props) => {
  return (
    <View style={estilo.botoesHorizontais}>
      <Button style={estilo.botao} title="+" onPress={props.increment} />
      <Button style={estilo.botao} title="-" onPress={props.decrement} />
    </View>
  );
};
