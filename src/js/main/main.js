import getPopularMovies from "../../apis/getPopularMovies.ts";
import getQueryMovies from "../../apis/getQueryMovies.ts";
import { selectDom } from "../dom.js";
import { addList } from "./list.js";

export let currentPage = 1;
export function resetPage(){
  currentPage = 1;
}

function Main(){
  document.querySelector('.main-contents').innerHTML = `
    <h2 id="label">지금 인기있는 영화</h2>
    <ul class="list"></ul>
    <button class='next' id="button-next">더보기</button>
    <button class='next' id="button-next-search">더보기</button>
  `;

  getPopularMovies(currentPage).then((data) => {
    console.log(data);
    addList(data);
  });

  selectDom('#button-next').addEventListener('click', nextPopular);
  selectDom('#button-next-search').addEventListener('click', nextSearch);
}

function nextPopular(){
  getPopularMovies(++currentPage).then((data => addList(data)));
}

function nextSearch(){
  const value = selectDom('#query').value;
  getQueryMovies(value, ++currentPage).then((data => addList(data)));
}

export default Main;
