import { selectDom } from "../dom";
import { addMovies, resetMovies } from '../movies/MainContents';
import getQueryMovies from '../../apis/getQueryMovies';

import "../../styles/header/Search.css";
import useInput from "../hooks/useInput";
import { usePageStore } from "../hooks/usePageStore";

function Search(){
  const page = usePageStore(state => state.page);
  const resetPage = usePageStore(state => state.reset);
  const { value: inputValue, onChange: handleInputChange } = useInput();

  const searchMovies = () => {
    resetPage();
    resetMovies();
    getQueryMovies(inputValue, page).then((data => {
      console.log(data);
      addMovies(data);
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
