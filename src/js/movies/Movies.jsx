import React, { useState } from "react";

import getPopularMovies from "../../apis/getPopularMovies";
import getQueryMovies from "../../apis/getQueryMovies";
import { addList } from "./list";
//import { inputRef } from "../header/Search.jsx";

import "../../styles/Movies.css";
import { useSharedState } from "../state.js";

function Movies(){
  const { currentPage, setCurrentPage } = useSharedState;

  const nextPopular = () => {
    getPopularMovies(currentPage).then((data => addList(data)));
    setCurrentPage(currentPage+1);
  }
  const nextSearch = () => {
    const value = inputRef.current.value;
    getQueryMovies(value, currentPage).then((data => addList(data)));
    setCurrentPage(currentPage+1);
  }

  nextPopular();
  return (
    <div className="main-contents">
      <h2 id="label">지금 인기있는 영화</h2>
      <ul className="list"></ul>
      <button className='next' id="button-next" onClick={nextPopular}>더보기</button>
      <button className='next' id="button-next-search" onClick={nextSearch}>더보기</button>
    </div>
  )
}

export default Movies;
