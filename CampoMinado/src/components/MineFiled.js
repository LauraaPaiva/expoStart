import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Field from "./Field";

export default (props) => {
  const rows = props.board.map((row, r) => {
    const column = row.map((field, c) => {
      return <Field {...field} key={c} />;
    });
    return <View style={styles.container}>{column}</View>;
  });

  return <View key={r}>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    backgroundColor: "#eee",
  },
});
