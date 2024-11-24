import Logo from './logo.js';
import Search from './search.js';

import { selectDom } from '../dom';

function Header() {
  selectDom('header').innerHTML = `
  <div class='logo'></div>
  <div class='search'></div>
  `;

  Logo();
  Search();
}

export default Header;
