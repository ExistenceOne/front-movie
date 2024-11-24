import { selectDom } from "../dom";
import image from '../../assets/logo.png';

function Logo(){
  selectDom('.logo').innerHTML = `
    <a href="index.html">
      <img class="img-logo">
    </a>
  `;
  selectDom('.img-logo').src = image;
}

export default Logo;
