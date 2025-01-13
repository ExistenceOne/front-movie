import { create } from "zustand";

export const useMovieListStore = create((set, get) => {
  return {
    list: [],
    reset: () => {
      set({ list: [] });
    },
    add: (data) => {
      const { list } = get();
      set({ list: [...list, ...data.results]});
      console.log(data);
    }
  }
});
