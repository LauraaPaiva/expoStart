import React, { Fragment } from "react";
import { View, Text } from "react-native";

export default (props) => {
  return (
    <Fragment>
      <Text>{props.a}</Text>
      <Text>{props.b}</Text>
    </Fragment>
  );
};
