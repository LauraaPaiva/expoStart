import React, { Fragment } from "react";
import { View, Text } from "react-native";

import Filho from "./Filho";

export default (props) => {
  let x = 13;
  let y = 100;
  return (
    <Fragment>
      <Filho a={x} b={y} />
      <Filho a={x + 100} b={y + 200} />
    </Fragment>
  );
};
