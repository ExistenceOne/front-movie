import { selectDom } from "../dom";
import { addList, removeList } from '../main/list';
import getQueryMovies from '../../apis/getQueryMovies.ts';

import image from '../../assets/search_button.png';
import { currentPage, resetPage } from "../main/main";

let page = 1;

function Search(){
  selectDom('.search').innerHTML = `
    <input id="query">
    <button id="button-search">
      <img class="img-search">
    </button>
  `;
  selectDom('.img-search').src = image;
  selectDom('#button-search').addEventListener('click', searchMovies);
  selectDom('#query').addEventListener('keydown', (event) => {
    if (event.key == 'Enter') searchMovies();
  });
}

function searchMovies(value = selectDom('#query').value){
  resetPage();
  removeList();
  getQueryMovies(value, currentPage).then((data => {
    console.log(data);
    addList(data);
  }));
  selectDom('#label').textContent = `"${value}" 검색 결과`;
  selectDom('#button-next').style.display = 'none';
  selectDom('#button-next-search').style.display = 'block';
}

export default Search;
