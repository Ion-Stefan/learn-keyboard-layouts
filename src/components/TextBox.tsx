import { useState } from "react";
import { useKeyboardStore, useWordsStore } from "../store"
import { WordList } from "./WordList";

type KeyPair = {
  [key: string]: string;
}

export const TextBox = () => {

  const typeWords = useWordsStore((state) => state.words);
  const keyboardLayout = useKeyboardStore((state) => state.layout);
  const [typedWord, setTypedWord] = useState('');

  const DvorakKeyPairs: KeyPair = {
    a: "a",
    s: "o",
    d: "e",
    f: "u",
    g: "i",
    h: "d",
    j: "h",
    k: "t",
    l: "n",
    ';': "s",
    q: "'",
    w: ",",
    e: ".",
    r: "p",
    t: "y",
    y: "f",
    u: "g",
    i: "c",
    o: "r",
    p: "l",
    '[': "/",
    ']': "=",
    '-': '[',
    '=': ']',
    z: ';',
    x: 'q',
    c: 'j',
    v: 'k',
    b: 'x',
    n: 'b',
    m: 'm',
    ',': 'w',
    '.': 'v',
    '/': 'z',
  }

  const ChangeKey = (event: React.ChangeEvent<HTMLInputElement> & React.KeyboardEvent<HTMLInputElement>, keyboardLayout: string) => {
    const key = event?.key.toLowerCase();
    const word = event.target.value

    if (keyboardLayout === "dvorak") {
      event.preventDefault();
      if (key in DvorakKeyPairs) {
        const pairedKey = DvorakKeyPairs[key];
        event.target.value += pairedKey;
        setTypedWord(event.target.value);
      }
      if (key === "backspace") {
        event.target.value = word.slice(0, -1);
        setTypedWord(event.target.value);
      }

      CheckWord(event);

    }
    else {
      setTypedWord(event.target.value);
    }
  }

  const CheckWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typedWord === typeWords[0]) {
      typeWords.shift();
      setTypedWord('');
      event.target.value = '';
    }
  }

  return (
    <div className="flex items-center justify-center flex-col gap-12">
      <WordList words={typeWords.slice(0,9)} />
      <input onKeyDown={(e: React.ChangeEvent<HTMLInputElement> & React.KeyboardEvent<HTMLInputElement>) => ChangeKey(e, keyboardLayout)} onChange={(e) => CheckWord(e)} className="border-black border-2 w-1/4 p-2" />
    </div>
  )
}
