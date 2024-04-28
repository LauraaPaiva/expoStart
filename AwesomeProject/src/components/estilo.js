import { StyleSheet } from "react-native";

export default StyleSheet.create({
  txtGrande: {
    fontSize: 24,
    textAlign: "center",
    padding: 20,
  },
  txtPequeno: {
    fontSize: 8,
    textAlign: "center",
  },
  tituloPrincipal: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  tituloSecundario: {
    fontSize: 18,
    textAlign: "center",
  },
  display: {
    backgroundColor: "#000",
    width: 300,
  },
  displayText: {
    color: "#FFF",
  },
  botoesHorizontais: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "center",
  },
  botao: {
    padding: 20,
  },
  flexV1: {
    flexGrow: 1,
    justifyContent: "space-evenly",
    padding: 20,
  },
  flexV2: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly", //eixo princial
    alignItems: "center", // eixo cruzado
    padding: 20,
  },
});
