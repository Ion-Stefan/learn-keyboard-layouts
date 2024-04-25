import { create } from "zustand";

type WordsStore = {
  words: string[];
};

export const useWordsStore = create<WordsStore>(() => ({
  words: [
    "stefan",
    "altceva",
    "cuvinte",
    "random",
    "test",
    "hello",
    "supercalifrigilisticexpialidocious",
    "stefan",
    "altceva",
    "cuvinte",
    "random",
    "test",
    "hello",
    "supercalifrigilisticexpialidocious",
    "stefan",
    "altceva",
    "cuvinte",
    "random",
    "test",
    "hello",
    "supercalifrigilisticexpialidocious",
    "stefan",
    "altceva",
    "cuvinte",
    "random",
    "test",
    "hello",
    "supercalifrigilisticexpialidocious",
  ],
}));

type KeyboardStore = {
  layout: string;
  changeLayout: (newLayout: string) => void;
};

export const useKeyboardStore = create<KeyboardStore>((set) => ({
  layout: "dvorak",
  changeLayout: (newLayout: string) => set({ layout: newLayout }),
}));

type KeyboardLayout = {
  dvorak: string[][];
};

export const useKeyboardLayoutStore = create<KeyboardLayout>(() => ({
  dvorak: [
    ["'", ",", ".", "p", "y", "f", "g", "c", "r", "l"],
    ["a", "o", "e", "u", "i", "d", "h", "t", "n", "s"],
    [";", "q", "j", "k", "x", "b", "m", "w", "v", "z"],
  ],
}));
