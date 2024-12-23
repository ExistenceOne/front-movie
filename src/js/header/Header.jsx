import Logo from './Logo.jsx';
import Search from './Search.jsx';
import '../../styles/Header.css';

function Header() {
  return (
    <header>
      <Logo/>
      <Search/>
    </header>
  )
}

export default Header;