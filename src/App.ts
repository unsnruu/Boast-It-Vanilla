// import { Profile } from "./Components/Sidebar/Profile";
import { ProfilePhoto } from "./Components/Sidebar/ProfilePhoto.js";

class App {
  constructor($app: Element) {
    const $profile = new ProfilePhoto();
    // $profile.innerHTML = `<img slot="userPhoto" src=https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg>`;
    $app.appendChild($profile);
  }
  setState() {}
  init() {
    //초기화 s작업
  }
}

export default App;
