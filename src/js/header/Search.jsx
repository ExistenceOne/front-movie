import React, { useState } from "react";

import { selectDom } from "../dom";
import { addList, removeList } from '../movies/list';
import getQueryMovies from '../../apis/getQueryMovies';

import { useSharedState } from "../state";

import "../../styles/Search.css";

function Search(){
  const { currentPage, setCurrentPage } = useSharedState();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const searchMovies = () => {
    setCurrentPage(0);
    removeList();
    getQueryMovies(inputValue, currentPage).then((data => {
      console.log(data);
      addList(data);
    }));
    selectDom('#label').textContent = `"${inputValue}" 검색 결과`;
    selectDom('#button-next').style.display = 'none';
    selectDom('#button-next-search').style.display = 'block';
  }

  return (
    <div className="search">
      <input
        value={inputValue}
        //ref={inputRef}
        onChange={handleInputChange}
      />
      <button onClick={searchMovies}>
        <img src="assets/search_button.png"></img>
      </button>
    </div>
  )
}

export default Search;
