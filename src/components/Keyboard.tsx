import React, { useState, useEffect } from "react";
import { useKeyboardLayoutStore } from "../store";

export const Keyboard = () => {
  const KeyboardCharacters = useKeyboardLayoutStore((state) => state.dvorak);
  const [pressedKey, setPressedKey] = useState(null);
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
    ";": "s",
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
    "[": "/",
    "]": "=",
    "-": "[",
    "=": "]",
    z: ";",
    x: "q",
    c: "j",
    v: "k",
    b: "x",
    n: "b",
    m: "m",
    ",": "w",
    ".": "v",
    "/": "z",
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      let key = event.key.toLowerCase();
      key = DvorakKeyPairs[key];
      if (KeyboardCharacters.flat().includes(key)) {
        setPressedKey(key);
        setTimeout(() => {
          setPressedKey(null);
        }, 100); // 500 milliseconds (half a second)
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [KeyboardCharacters]);

  return (
    <div className="flex items-center flex-col font-mono font-extrabold justify-center mt-12">
      {KeyboardCharacters.map((keyrow, rowIndex) => (
        <div key={rowIndex} className="mt-8">
          {keyrow.map((key, colIndex) => (
            <span
              key={colIndex}
              className={`text-4xl border-black border-2 p-2 font-mono ${key.toLowerCase() === pressedKey ? "text-red-400" : "text-black"}`}
            >
              {key}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
