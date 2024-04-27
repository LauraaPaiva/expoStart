import { React, Fragment } from "react";
import { Button } from "react-native";

export default (props) => {
  function executar() {
    console.warn("1");
  }

  return (
    <Fragment>
      <Button title="1" onPress={executar} />
      <Button title="2" onPress={() => console.warn("2")} />
    </Fragment>
  );
};
