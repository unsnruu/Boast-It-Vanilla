interface UserPhotoState {
  src?: string;
}

const $template = document.createElement("template");
$template.innerHTML = `
  <style>
    :host { 
      background-image: linear-gradient(#fff,#fff), linear-gradient(45deg, orange, purple);
      background-clip: content-box, border-box;
      background-origin: border-box;
      border-radius : 50%;
      border: 3px solid transparent;
      width: 70px;
      height: 70px;
      margin: 10px;
      display: flex;
      contain: content;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 90%;
      height: 90%;
      border-radius: 50%;
      object-fit: cover;
    }
  </style>
  <img src="./assets/sample-profile.png" alt="default profile image">
`;

customElements.define(
  "user-photo",
  class extends HTMLElement {
    constructor(state: UserPhotoState) {
      super();
      console.log("State:", state);
      this.attachShadow({ mode: "open" }).appendChild(
        $template.content.cloneNode(true)
      );
      // img에 대한 src 주소가 state로 주어졌다면,
      if (state && state.src) {
        const $img = this.shadowRoot?.querySelector("img");
        $img?.setAttribute("src", state.src);
      }
    }
  }
);

const UserPhoto = customElements.get("user-photo")!;

export { UserPhoto };
