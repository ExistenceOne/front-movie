import { BASE_URL } from "../constants";
import type { MovieAPIResponse } from "../types/movie";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getQueryMovies = async (query: string, page: number = 1) => {
    const response = await fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&language=ko-KR&page=${page}`);

    if (response.ok) {
        const data: MovieAPIResponse = await response?.json();
        return data;
    }
    else {
        throw new Error();
    }
};

export default getQueryMovies;
