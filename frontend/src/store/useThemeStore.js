import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chatGram-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("chatGram-theme", theme);
    set({ theme });
  },
}));