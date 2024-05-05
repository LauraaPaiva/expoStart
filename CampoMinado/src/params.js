import { Dimensions } from "react-native";

const params = {
  blockSize: 25,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.1,
  difficultLevel: 0.1,
  getColumnsAmount() {
    const width = Dimensions.get("window").width;
    return Math.floor(width / (this.blockSize + 4));
  },
  getRowsAmount() {
    const totalHeight = Dimensions.get("window").height;
    const boardHeight = totalHeight * (1 - this.headerRatio);
    return Math.floor(boardHeight / (this.blockSize + 4));
  },
};

export default params;
