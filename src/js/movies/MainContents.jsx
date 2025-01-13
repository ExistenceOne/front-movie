import React, { createContext, useContext, useEffect, useRef, useState } from "react";

import getPopularMovies from "../../apis/getPopularMovies";
import getQueryMovies from "../../apis/getQueryMovies";

import "../../styles/movies/MainContents.css";
import MovieInfo from "./MovieInfo.jsx";
import { IMAGE_URL } from "../../constants/index.ts";
import { usePageStore } from "../hooks/usePageStore.js";

export const InfoContext = createContext();

export default function MainContents(){
  const page = usePageStore(state => state.page);
  const increasePage = usePageStore(state => state.increase);
  const [movieList, setMovieList] = useState([]);
  const [infoState, setInfoState] = useState({});
  const dialogRef = useRef();
  const showInfo = (index) => {
    setInfoState({
      'title': movieList[index].title,
      'poster': movieList[index].poster_path,
      'overview': movieList[index].overview,
      'vote_average': movieList[index].vote_average.toFixed(1)
    });
    dialogRef.current.showModal();
  }

  const addMovies = (data) => {
    setMovieList((prevList) => [...prevList, ...data.results]);
    console.log(movieList);
  }

  const resetMovies = () => {
    setMovieList();
  }

  const nextPopular = () => {
    increasePage();
    getPopularMovies(page).then((data => (addMovies(data), console.log(data))));
  };

  const nextSearch = () => {
    const value = inputRef.current.value;
    increasePage();
    getQueryMovies(value, page).then((data => (addMovies(data), console.log(data))));
  };
  
  useEffect(() => {
    nextPopular();
  }, []);
  
  return (
    <div className="main-contents">
      <InfoContext.Provider value={infoState}>
        <MovieInfo ref={dialogRef}/>
      </InfoContext.Provider>
      <h2 id="label">지금 인기있는 영화</h2>
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
      <button className='next' id="button-next" onClick={() => nextPopular()}>더보기</button>
      <button className='next' id="button-next-search" onClick={() => nextSearch()}>더보기</button>
    </div>
  );
}
