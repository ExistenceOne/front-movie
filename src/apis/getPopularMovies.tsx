import { BASE_URL } from "../constants";
import type { MovieAPIResponse } from "../types/movie";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getPopularMovies = async (page: number = 1) => {
    const response = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=${page}`);

    if (response.ok) {
        const data: MovieAPIResponse = await response?.json();
        return data;
    }
    else {
        throw new Error();
    }
};

export default getPopularMovies;
