import Post from "./Post.js";

class Board {
  constructor({ $app, initialState }) {
    this.state = initialState;

    this.$board = document.createElement("main");
    this.$board.classList.add("board");

    $app.appendChild(this.$board);
  }
  setState() {}
  render() {}
}
export default Board;
