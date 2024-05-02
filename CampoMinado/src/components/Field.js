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
    if (nearMines === 1) color = "#0083b7";
    if (nearMines === 2) color = "#9000ff";
    if (nearMines > 2) color = "#ff00d9";
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
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: "#aaa",
    borderLeftColor: "#CCC",
    borderTopColor: "#CCC",
    borderRightColor: "#333",
    borderBottomColor: "#333",
  },
  opened: {
    backgroundColor: "#aaa",
    borderLeftColor: "#333",
    borderTopColor: "#333",
    borderRightColor: "#ccc",
    borderBottomColor: "#ccc",
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
