interface UserInfoState {
  posts: number;
  followers: number;
  following: number;
}
interface UserInfoConstructor {
  new (state: UserInfoState): Element;
}

function numToString(num: number): string {
  let str: string;
  if (num >= 1000000) {
    str = (num / 10000000).toFixed(0);
    str += "m";
    return str;
  } else if (num >= 1000) {
    str = (num / 1000).toFixed(0);
    str += "k";
    return str;
  }
  return num.toString();
}

const UserInfo = (function (): UserInfoConstructor {
  const $template = document.createElement("template");
  $template.innerHTML = `
  <style>
    :host{
      display:flex;
      width: 200px;
      height: 200px;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      background-color:red;
      flex-grow:10;  
    }
    .info{
      background-color:yellow;
      border-right: 1px solid black;
      display: flex;
      flex-direction:column;
      justify-content: center;
      align-items:center;
    }
    .info:last-child{
      border-right: none;
    }

  </style>
  <div class="info" role="posts">
      <span class="number">0</span>
      <span class="text">Posts</span>
    </div>
    <div class="info" role="followers">
      <span class="number">0</span>
      <span class="text">Followers</span>
    </div>
    <div class="info" role="following">
      <span class="number">0</span>
      <span class="text">Following</span>
    </div>

`;
  customElements.define(
    "user-info",
    class extends HTMLElement {
      constructor(
        state: UserInfoState = { posts: 0, followers: 0, following: 0 }
      ) {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild($template.content.cloneNode(true));

        const infos = Array.from(shadowRoot.querySelectorAll(".info"));

        infos.forEach(($info) => {
          const role = $info.getAttribute("role");
          let num = 0;
          switch (role) {
            case "posts":
              num = state.posts;
              break;
            case "following":
              num = state.following;
              break;
            case "followers":
              num = state.followers;
              break;
          }

          $info.firstElementChild!.textContent = numToString(num);
        });
      }
    }
  );

  return customElements.get("user-info")!;
})();

export { UserInfo };
