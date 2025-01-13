import { useMovieListStore } from "../hooks/useMovieListStore";
import { IMAGE_URL } from "../../constants/index.ts";
import { useInfoStore } from "../hooks/useInfoStore.js";
import { useRef } from "react";
import MovieInfo from "./MovieInfo.jsx";

export default function MovieList() {
  const movieList = useMovieListStore(state => state.list);
  const refreshInfo = useInfoStore(state => state.refresh);
  const dialogRef = useRef();

  const showInfo = (index) => {
    refreshInfo({
      'title': movieList[index].title,
      'poster': movieList[index].poster_path,
      'overview': movieList[index].overview,
      'vote_average': movieList[index].vote_average.toFixed(1)
    });
    dialogRef.current.showModal();
  }

  return (
    <>
      <MovieInfo ref={dialogRef}/>
      <ul className="list">
        {movieList.map((movie, index) => (
          <li key={index} className='movie' onClick={() => showInfo(index)}>
            <img className='movie poster' src={`${IMAGE_URL}${movie.poster_path}`}></img>
            <p className='movie title'>{movie.title}</p>
            <p className='movie vote_average'>
              {movie.vote_average.toFixed(1)}
              <img className='star' src='assets/star.svg'></img>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
