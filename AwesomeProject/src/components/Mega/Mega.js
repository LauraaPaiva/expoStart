import React, { Component } from "react";
import { Button, Text, TextInput } from "react-native";
import Estilo from "../estilo";
import estilo from "../estilo";

export default class Mega extends Component {
  state = {
    quantidadeDeNumeros: this.props.quantidadeDeNumeros,
    numeros: [],
  };

  alterarQuantidadeDeNumeros = (quantidade) => {
    this.setState({ quantidadeDeNumeros: +quantidade });
  };

  gerarNumeroNaoContido = (nums) => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.quantidadeDeNumeros)
      .fill()
      .reduce((n) => [...n, this.gerarNumeroNaoContido(n)], [])
      .sort((a, b) => a - b);
    this.setState({ numeros });
  };

  render() {
    return (
      <>
        <Text style={estilo.txtGrande}>Gerador de Mega Sena</Text>
        <TextInput
          style={{ borderBottomWidth: 1, padding: 20 }}
          keyboardType={"numeric"}
          placeholder="Quantidade de Números"
          value={`${this.state.quantidadeDeNumeros}`}
          onChangeText={this.alterarQuantidadeDeNumeros}
        />
        <Button title="Gerar" onPress={this.gerarNumeros} />
        <Text>{this.state.numeros.join(", ")}</Text>
      </>
    );
  }
}
