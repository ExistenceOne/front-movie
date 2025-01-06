import Logo from './Logo.jsx';
import Search from './Search.jsx';
import '../../styles/header/Header.css';

export default function Header() {
  return (
    <div className="header">
      <Logo/>
      <Search/>
    </div>
  )
}
