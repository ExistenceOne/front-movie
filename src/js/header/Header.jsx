import Logo from './Logo.jsx';
import Search from './Search.jsx';
import '../../styles/Header.css';

export default function Header() {
  return (
    <header>
      <Logo/>
      <Search/>
    </header>
  )
}
