import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Flag from "./Flag";
import Mine from "./Mine";

export default (props) => {
  return (
    <>
      <View>
        <Text style={styles.title}>Campo Minado</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
          <Text style={styles.buttonLabel}>Novo Jogo</Text>
        </TouchableOpacity>
        <View style={styles.flagContainer}>
          <TouchableOpacity
            style={styles.flagButton}
            onPress={props.onFlagPress}
          >
            <Flag bigger off={props.flagOff} />
          </TouchableOpacity>
          <Text style={styles.flagsLeft}>{props.flagsLeft}</Text>
          <TouchableOpacity
            style={styles.mineButton}
            onPress={props.onMinePress}
          >
            <Mine />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#005475",
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    margin: 10,
    borderRadius: 25,
    backgroundColor: "#aaa",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingHorizontal: 20,
  },

  flagContainer: {
    flexDirection: "row",
  },
  flagButton: {
    marginTop: 10,
    minWidth: 30,
  },
  flagsLeft: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 5,
    marginLeft: 20,
  },
  button: {
    backgroundColor: "#999",
    padding: 5,
    borderRadius: 5,
    margin: 20,
  },
  buttonLabel: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  mineButton: {
    marginTop: 20,
    marginLeft: 20,
    minWidth: 30,
  },
});
