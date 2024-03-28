import {create} from "zustand";

type WordsStore = {
  words: string[];
}

export const useWordsStore = create<WordsStore>(() => ({
  words: ['stefan', 'altceva', 'cuvinte', 'random', 'test', 'hello', 'supercalifrigilisticexpialidocious']
}));
