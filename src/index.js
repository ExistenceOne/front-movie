import "./styles/reset.css";
import "./styles/style.css";

import { getPopularMovies, searchMovies } from "./apis/getMovies";
import { addList, removeList } from "./list";

import img_logo from './assets/logo.png';
import img_search from './assets/search_button.png';

const element_img_logo = document.querySelector('.img-logo');
const element_img_search = document.querySelector('.img-search');
const element_query = document.querySelector('#query');
const element_button_search = document.querySelector('#button-search');
const element_button_next = document.querySelector('#button-next');

element_img_logo.src = img_logo;
element_img_search.src = img_search;

getPopularMovies(1).then((data) => {
  console.log(data);
  addList(data.results);
});

function search(){
  const element_query = document.querySelector('#query');
  const value = element_query.value;
  const label = document.querySelector('#label');
  label.textContent = `"${value}" 검색 결과`;
  removeList();
  searchMovies(value, 1).then((data => {
    addList(data.results);
  }));
}

element_button_search.addEventListener('click', search);
element_query.addEventListener('keydown', (event) => {
  if (event.key == 'Enter') search();
});
