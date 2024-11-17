import { IMAGE_URL } from "./constants";
import img_star from './assets/star.svg';

const lists = [];
const target = document.querySelector('.list');

export const addList = (res) => {
  res.forEach(movie => {
    const li = document.createElement('li');
    const poster = document.createElement('img');
    poster.src = `${IMAGE_URL}${movie.poster_path}`;
    poster.style.borderRadius = '8px';
    const title = document.createElement('p');
    title.className = 'movie title';
    title.innerText = movie.title;
    const rate = document.createElement('p');
    rate.innerText = movie.vote_average.toFixed(1);
    const star = document.createElement('img');
    star.src = img_star;
    star.style.translate = '20% 20%';
    rate.appendChild(star);
    li.appendChild(poster);
    li.appendChild(title);
    li.appendChild(rate);
    lists.push(li);
  });
  refreshList();
}

export const removeList = () => {
  lists.splice('');
  target.replaceChildren();
}

export const refreshList = () => {
  target.replaceChildren();
  lists.forEach(list => {
    target.appendChild(list);
  });
}
