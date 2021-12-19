interface AccountState {
  username: string;
  userId: string;
}
interface UserAccountConstructor {
  new (state: AccountState): HTMLElement;
}

const UserAccount = (function (): UserAccountConstructor {
  const $template = document.createElement("template");
  $template.innerHTML = `
  <style>
    :host {
      display:block;
      width:100px;
      height:100px;
      background-color: transparent; 
    }
  </style>
  <h3 id="username"></h3>
  <h5 id="userid"></h5>
`;

  customElements.define(
    "user-account",
    class extends HTMLElement {
      constructor(state: AccountState) {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild($template.content.cloneNode(true));

        shadowRoot.getElementById("username")!.textContent = state.username;
        shadowRoot.getElementById("userid")!.textContent = state.userId;
      }
    }
  );

  return customElements.get("user-account")!;
})();

export { UserAccount };
