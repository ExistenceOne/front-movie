import { createContext, useState } from 'react'
import Header from './js/header/Header'
import MainContents from './js/movies/MainContents'
import './reset.css'

export const PageContext = createContext();
export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <PageContext.Provider value={{currentPage, setCurrentPage}}>
      <Header/>
      <MainContents/>
    </PageContext.Provider>
  )
}
