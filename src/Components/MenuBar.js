class MenuBar {
  constructor({ $app, intialState }) {
    this.state = ["a", "b", "c", "d"];

    this.$menuBar = document.createElement("nav");
    this.$menuBar.classList.add("menu-bar");

    $app.appendChild(this.$menuBar);
  }
  setState(nextState) {
    //state 비교문 넣기. Object.is 를 사용하면 어떨까?
    //단 이 경우 모든 상태는 {} 이어야 한다.
    this.state = nextState;
    this.render();
  }

  render() {
    this.$state.forEach((text) => new MenuBtn(this.$menuBar, text));
  }
}

class MenuBtn {
  constructor({ $menuBar, intialState }) {
    this.state = intialState;

    this.$btn = document.createElement("button");
    this.$btn.classList.add("menu-btn");

    $menuBar.appendChild("$btn");
  }
}

export default MenuBar;
