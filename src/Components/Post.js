class Post {
  constructor({ $board, initialState }) {
    this.state = initialState;
    // Compose post
    this.$post = document.createElement("div");
    this.$post.classList.add("post");
    // post > img
    this.$image = document.createElement("img");
    //// img가 로딩 중일 때를 대비한 초기 상태로 클래스를 설정
    this.$image.classList.add("loading");
    // post > bottom-bar
    this.$bottomBar = document.createElement("div");
    this.$bottomBar.classList.add("bottom-bar");

    $board.appendChild($post);
  }
}

export default Post;
