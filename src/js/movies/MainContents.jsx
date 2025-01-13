import React, { createContext, useContext, useEffect, useRef, useState } from "react";

import getPopularMovies from "../../apis/getPopularMovies";
import getQueryMovies from "../../apis/getQueryMovies";

import "../../styles/movies/MainContents.css";
import MovieInfo from "./MovieInfo.jsx";
import { IMAGE_URL } from "../../constants/index.ts";
import { usePageStore } from "../hooks/usePageStore.js";
import { useMovieListStore } from "../hooks/useMovieListStore.js";
import { useInputStore } from "../hooks/useInputStore.js";
import { useInfoStore } from "../hooks/useInfoStore.js";

export const InfoContext = createContext();

export default function MainContents(){
  const page = usePageStore(state => state.page);
  const increasePage = usePageStore(state => state.increase);
  const movieList = useMovieListStore(state => state.list);
  const addMovieList = useMovieListStore(state => state.add);
  const inputValue = useInputStore(state => state.value);
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

  const nextPopular = () => {
    increasePage();
    getPopularMovies(page).then((data => (addMovieList(data))));
  };

  const nextSearch = () => {
    increasePage();
    getQueryMovies(inputValue, page).then((data => (addMovieList(data))));
  };
  
  useEffect(() => {
    nextPopular();
  }, []);
  
  return (
    <div className="main-contents">
      <MovieInfo ref={dialogRef}/>
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
