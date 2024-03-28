import { useState } from "react";
import { useWordsStore } from "../store"
import { WordList } from "./WordList";

export const TextBox = () => {

  const typeWords = useWordsStore((state) => state.words);
  const [typedWord, setTypedWord] = useState('');

  const CheckWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypedWord(event.target.value);
    if(typedWord === typeWords[0])
    {
      console.log("it works! array should shift");
      typeWords.shift();
      setTypedWord('');
      event.target.value = '';
    }
  }

  return (
    <div className="flex items-center justify-center flex-col gap-12">
      <WordList words={typeWords}/>
      <input onChange={(e) => CheckWord(e)} className="border-black border-2 w-1/4 p-2" />
    </div>
  )
}
