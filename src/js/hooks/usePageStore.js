import { create } from "zustand"

export const usePageStore = create((set, get) => {
  return {
    page: 1,
    reset: () => {
      set({ page: 1 });
    },
    increase: () => {
      const { page } = get();
      set({ page: page + 1 });
    }
  }
});
