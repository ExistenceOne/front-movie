import React, { useEffect, useRef } from "react";

import getPopularMovies from "../../apis/getPopularMovies";
import getQueryMovies from "../../apis/getQueryMovies";

import "../../styles/movies/MainContents.css";
import MovieList from "./MovieList.jsx";
import { usePageStore } from "../hooks/usePageStore.js";
import { useMovieListStore } from "../hooks/useMovieListStore.js";
import { useInputStore } from "../hooks/useInputStore.js";

export default function MainContents(){
  const page = usePageStore(state => state.page);
  const increasePage = usePageStore(state => state.increase);
  const addMovieList = useMovieListStore(state => state.add);
  const inputValue = useInputStore(state => state.value);

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
      <h2 id="label">지금 인기있는 영화</h2>
      <MovieList/>
      <button className='next' id="button-next" onClick={() => nextPopular()}>더보기</button>
      <button className='next' id="button-next-search" onClick={() => nextSearch()}>더보기</button>
    </div>
  );
}
