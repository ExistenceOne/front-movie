//import "../../styles/movies/Movie.css"

import { IMAGE_URL } from "../../constants"

export default function Movie(){
  const setInfo = () => {
    
  }
  const showInfo = () => {

  }

  return (
    <>
      <li className='movie' onClick={() => showInfo()}>
        <img className='movie poster' src={`${IMAGE_URL}${movie.poster_path}`}></img>
        <p className='movie title'>제목</p>
        <p className='movie rating'>평가</p>
      </li>
    </>
  )
}