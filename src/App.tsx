import { Keyboard } from "./components/Keyboard";
import { LayoutSelector } from "./components/LayoutSelector";
import { LevelSelector } from "./components/LevelSelector";
// import { NavBar } from "./components/NavBar";
import { TextBox } from "./components/TextBox";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <LayoutSelector />
      <LevelSelector />
      <TextBox />
      <Keyboard />
    </>
  );
}

export default App;
