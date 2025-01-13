import { selectDom } from "../dom";
import getQueryMovies from '../../apis/getQueryMovies';

import "../../styles/header/Search.css";
import { usePageStore } from "../hooks/usePageStore";
import { useMovieListStore } from "../hooks/useMovieListStore";
import { useInputStore } from "../hooks/useInputStore";

function Search(){
  const resetPage = usePageStore(state => state.reset);
  const addMovieList = useMovieListStore(state => state.add);
  const resetMovieList = useMovieListStore(state => state.reset);
  const inputValue = useInputStore(state => state.value);
  const handleInputChange = useInputStore(state => state.onChange);

  const searchMovies = () => {
    resetPage();
    resetMovieList();
    getQueryMovies(inputValue).then((data => {
      console.log(data);
      addMovieList(data);
    }));
    selectDom('#label').textContent = `"${inputValue}" 검색 결과`;
    selectDom('#button-next').style.display = 'none';
    selectDom('#button-next-search').style.display = 'block';
  }

  return (
    <div className="search">
      <input
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={searchMovies}>
        <img src="assets/search_button.png"></img>
      </button>
    </div>
  )
}

export default Search;
