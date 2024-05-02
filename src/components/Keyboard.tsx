import { useState, useEffect } from "react";
import { useKeyboardLayoutStore, useListIndexStore } from "../store";

export const Keyboard = () => {
  const KeyboardCharacters = useKeyboardLayoutStore((state) => state.dvorak);
  const [pressedKey, setPressedKey] = useState(null);
  const selectedKeys = [
    ['a', 'o', 'e', 'u','h','t','n','s'],
    ['a', 'o', 'e', 'u', 'i','d','h','t','n','s'],
    ['a', 'o', 'e', 'u', 'i','d','h','t','n','s','p','f','c','r','l','k','m','v'],
    ['a', 'o', 'e', 'u', 'i','d','h','t','n','s','y','g','q','j','x','b','w','z'],
    ['a', 'o', 'e', 'u', 'i','d','h','t','n','s','p','f','c','r','l','k','m','v','b','g','j','q','w','x','y','z'],
  ];
  const levelIndex = useListIndexStore((state) => state.index);
  console.log(levelIndex);
  const DvorakKeyPairs = {
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
              //if key is in selectedKeys, then change the color to red
              className={`text-4xl border-black border-2 p-2 font-mono
              ${selectedKeys[levelIndex].includes(key.toLowerCase()) ? "text-black" : "text-gray-400"}
${key.toLowerCase() === pressedKey ? "text-red-400" : "text-black"}`}
            >
              {key}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
