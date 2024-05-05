import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import params from "../params";
import Mine from "./Mine";
import Flag from "./Flag";

export default (props) => {
  const { mined, opened, nearMines, exploded, flagged } = props;

  const styleField = [styles.field];
  if (opened) styleField.push(styles.opened);
  if (exploded) styleField.push(styles.exploded);
  if (flagged) styleField.push(styles.flagged);
  if (!opened && !exploded) styleField.push(styles.regular);

  let color = "#999";
  if (nearMines > 0) {
    if (nearMines === 1) color = "#005475";
    if (nearMines === 2) color = "#9000ff";
    if (nearMines > 2) color = "#c700a9";
    if (nearMines > 5) color = "#ff0000";
  }

  return (
    <TouchableWithoutFeedback onPress={props.onOpen}>
      <View style={styleField}>
        {!mined && opened && nearMines > 0 ? (
          <Text style={[styles.label, { color: color }]}>{nearMines}</Text>
        ) : (
          false
        )}
        {mined && opened ? <Mine /> : false}
        {flagged && !opened ? <Flag /> : false}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderRadius: 10,
    margin: 1,
  },
  regular: {
    backgroundColor: "#666",
  },
  opened: {
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: params.fontSize,
  },
  exploded: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
