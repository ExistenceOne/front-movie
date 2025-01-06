import React, { createContext, useEffect, useState } from "react";

import getPopularMovies from "../../apis/getPopularMovies";
import getQueryMovies from "../../apis/getQueryMovies";
//import { addList } from "./list";
//import { inputRef } from "../header/Search.jsx";

import "../../styles/movies/MainContents.css";
import { useSharedState } from "../state.js";
import MovieInfo from "./MovieInfo.jsx";
import { IMAGE_URL } from "../../constants/index.ts";

export const InfoContext = createContext();

export default function MainContents(){
  const { currentPage, setCurrentPage } = useSharedState();
  const [movieList, setMovieList] = useState([]);
  const [infoState, setInfoState] = useState(["gd", "sd"]);

  const showInfo = (index) => {
    setInfoState({
      'title': movieList[index].title,
      'overview': movieList[index].overview,
      'vote_average': movieList[index].vote_average.toFixed(1)
    });
  }

  const addMovies = (data) => {
    setMovieList((prevList) => [...prevList, ...data.results]);
    console.log(movieList);
  }

  const nextPopular = () => {
    setCurrentPage(currentPage+1);
    getPopularMovies(currentPage).then((data => (addMovies(data), console.log(data))));
  };

  const nextSearch = () => {
    const value = inputRef.current.value;
    setCurrentPage(currentPage+1);
    getQueryMovies(value, currentPage).then((data => (addMovies(data), console.log(data))));
  };

  
  useEffect(() => {
    nextPopular();
  }, []);
  
  return (
    <div className="main-contents">
      <InfoContext.Provider value={infoState}>
        <MovieInfo/>
      </InfoContext.Provider>
      <h2 id="label">지금 인기있는 영화</h2>
      <ul className="list">
        {movieList.map((movie, index) => (
          <li key={index} className='movie' onClick={() => showInfo(index)}>
            <img className='movie poster' src={`${IMAGE_URL}${movie.poster_path}`}></img>
            <p className='movie title'>{movie.title}</p>
            <p className='movie rating'>
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
