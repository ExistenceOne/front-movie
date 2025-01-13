import { create } from "zustand";

export const useInputStore = create((set, get) => {
  return {
    value: '',
    onChange: (e) => {
      set({value: e.target.value});
    }
  }
});
