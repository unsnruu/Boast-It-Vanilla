customElements.define(
  "profile-photo",
  class extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      // shadowRoot > style
      const style = document.createElement("style");
      style.textContent = `
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
        img, ::slotted(img){
          width: 90%;
          height: 90%;
          border-radius: 50%;
          object-fit: cover;
        }
      `;
      // shadowRoot > slot
      const $slotImg = document.createElement("slot");
      $slotImg.setAttribute("name", "userPhoto");
      // shadowRoot > slot > fallback
      $slotImg.innerHTML = `
        <img src="./assets/sample-profile.png" alt="default profile image">
      `;
      // Appending
      shadowRoot.appendChild(style);
      shadowRoot.appendChild($slotImg);
    }
  }
);

const ProfilePhoto = customElements.get("profile-photo")!;
export { ProfilePhoto };
