import { createContext } from 'react'
import Header from './js/header/Header'
import Movies from './js/movies/Movies'
import './styles/reset.css'

export const pageContext = createContext(0);
export default function App() {
  return (
    <>
      <Header/>
      <Movies/>
    </>
  )
}
