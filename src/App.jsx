import { createContext } from 'react'
import Header from './js/header/Header'
import MainContents from './js/movies/MainContents'
import './reset.css'

export const pageContext = createContext(0);
export default function App() {
  return (
    <>
      <Header/>
      <MainContents/>
    </>
  )
}
