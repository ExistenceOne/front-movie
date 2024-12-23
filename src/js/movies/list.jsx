import { IMAGE_URL } from "../../constants";
import { createDom, selectDom } from "../dom";

const lists = [];

export const addList = (data) => {
  data.results.forEach(movie => {
    const li = createDom('li');

    const poster = createDom('img');
    poster.src = `${IMAGE_URL}${movie.poster_path}`;
    poster.style.borderRadius = '8px';

    const title = createDom('p');
    title.className = 'movie title';
    title.innerText = movie.title;

    const rate = createDom('p');
    rate.innerText = movie.vote_average.toFixed(1);

    const star = createDom('img');
    star.src = 'assets/star.svg';
    star.style.translate = '20% 20%';

    li.appendChild(poster);
    li.appendChild(title);
    li.appendChild(rate).appendChild(star);

    lists.push(li);
  });
  refreshList();
  if (data.total_pages == data.page)
    selectDom('#button-next-search').style.display = 'none';
}

export const removeList = () => {
  lists.splice('');
  selectDom('.list').replaceChildren();
}

export const refreshList = () => {
  selectDom('.list').replaceChildren();
  lists.forEach(list => {
    selectDom('.list').appendChild(list);
  });
  if (lists.length == 0){
    const label = createDom('span');
    label.textContent = "🥲 검색 결과가 없네요";
    label.style.fontSize = '24px';
    selectDom('.list').appendChild(label);
  }
}
