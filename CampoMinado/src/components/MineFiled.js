import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Field from "./Field";

export default (props) => {
  const rows = props.board.map((row, r) => {
    const column = row.map((field, c) => {
      return (
        <Field {...field} key={c} onOpen={() => props.onOpenField(r, c)} />
      );
    });
    return (
      <View key={r} style={{ flexDirection: "row" }}>
        {column}
      </View>
    );
  });

  return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
  },
});
