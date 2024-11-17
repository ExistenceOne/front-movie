import { IMAGE_URL } from "./constants";
import img_star from './assets/star.svg';

const add_list = (res) => {
  res.forEach(movie => {
    const target = document.querySelector('.list');
    const li = document.createElement('li');
    const poster = document.createElement('img');
    poster.src = `${IMAGE_URL}${movie.poster_path}`;
    poster.style.borderRadius = '8px';
    poster.width = 182;
    const title = document.createElement('p');
    title.className = 'movie title';
    title.innerText = movie.title;
    const rate = document.createElement('p');
    rate.innerText = movie.vote_average;
    const star = document.createElement('img');
    star.src = img_star;
    star.style.translate = '20% 20%';
    rate.appendChild(star);
    li.appendChild(poster);
    li.appendChild(title);
    li.appendChild(rate);
    target.appendChild(li);
  });
}

export default add_list;