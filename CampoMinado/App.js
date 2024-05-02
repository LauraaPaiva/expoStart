import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";

import params from "./src/params";
import Field from "./src/components/Field";
import Flag from "./src/components/Flag";
import MineFiled from "./src/components/MineFiled";
import {
  createMineBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
} from "./src/functions";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const rows = params.getRowsAmount();
    const cols = params.getColumnsAmount();
    return Math.ceil(rows * cols * params.difficultLevel);
  };

  createState = () => {
    const rows = params.getRowsAmount();
    const cols = params.getColumnsAmount();
    return {
      board: createMineBoard(rows, cols, this.minesAmount()),
      won: false,
      lose: false,
    };
  };

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);

    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert("Partida perdida!", "Mais sorte da próxima vez...");
    }

    if (won) {
      showMines(board);
      Alert.alert("Parabéns!", "Você venceu!");
    }

    this.setState({
      board,
      won,
      lose,
    });
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text>Campo Minado</Text>
          <View style={styles.board}>
            <MineFiled
              board={this.state.board}
              onOpenField={this.onOpenField}
            />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c7fff5",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-around",
  },
  board: {
    alignItems: "center",
    backgroundColor: "#AAA",
  },
});
