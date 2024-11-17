import "./styles/reset.css";
import "./styles/style.css";

import getPopularMovies from "./apis/getPopularMovies";
import add_list from "./list";

import img_logo from './assets/logo.png';
import img_search from './assets/search_button.png';

document.querySelector('.img-logo').src = img_logo;
document.querySelector('.img-search').src = img_search;

getPopularMovies(1).then((data) => {
  console.log(data);
  add_list(data.results);
});

