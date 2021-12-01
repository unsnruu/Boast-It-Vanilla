import MenuBar from "./Components/MenuBar.js";
import Board from "./Components/Board.js";

class App {
  constructor($app) {
    this.state = {};
    this.eventHandler = {
      //this binding 문제로 인해 화살표 함수로 선언
      scorllHandler: (event) => {},
    };
    this.$menuBar = new MenuBar({ $app, intialState: {} });
    this.$board = new Board({ $app, initialState: {} });
  }
  setState(nextState) {
    this.state = nextState;
    this.$board;
  }
  init() {
    //초기화 작업
  }
}

export default App;
