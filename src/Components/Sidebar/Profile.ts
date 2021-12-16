import {} from "./ProfilePhoto";

customElements.define(
  "profile-container",
  class extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: "open" });
      const style = document.createElement("style");
      const $profile = document.createElement("div");
      shadow.appendChild(style);
      shadow.appendChild($profile);
      //$profile > $photo
      const $profilePhoto = document.createElement("img");
      $profilePhoto.setAttribute("src", "../../assets/sample-profile");
      //$profile > $accountContainer
      const $accountContainer = document.createElement("div");
      $accountContainer.className = "profile-accountContainer";
      //$profile > $accountContainer > $username
      const $userName = document.createElement("span");
      //$profile > $accountContainer > $userId
      const $userId = document.createElement("span");
    }
    connectedCallback() {}
    disconnectedCallback() {}
    static get observedAttributes(): string[] {
      return [];
    }

    attributeChangedCallback(
      attrName: string,
      oldValue: string,
      newValue: string
    ) {}
  }
);

const Profile = customElements.get("profile-container")!;
export { Profile };
