import { create } from "zustand";

export const useInfoStore = create((set, get) => {
  return {
    info: {},
    refresh: (newInfo) => {
      set({info: newInfo});
    }
  };
});
