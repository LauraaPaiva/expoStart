import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, SafeAreaView } from "react-native";

import params from "./src/params";
import Field from "./src/components/Field";
import Flag from "./src/components/Flag";
import MineFiled from "./src/components/MineFiled";
import Header from "./src/components/Header";
import {
  createMineBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlags,
  flagsUsed,
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
      lost: false,
      flagOff: true,
    };
  };

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);

    if (flagOff) {
      openField(board, row, column);
    } else {
      invertFlags(board, row, column);
    }

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
      lost,
    });
  };

  flagActivate = () => {
    flagOff = !this.state.flagOff;
    this.setState({ flagOff });
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <Header
            flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
            onNewGame={() => this.setState(this.createState())}
            onFlagPress={this.flagActivate}
            flagOff={this.state.flagOff}
          />
          <View style={styles.board}>
            <MineFiled
              board={this.state.board}
              onOpenField={this.onOpenField}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#575757",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-around",
  },
  board: {
    alignItems: "center",
  },
});
