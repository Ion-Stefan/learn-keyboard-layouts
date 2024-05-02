import { Keyboard } from "./components/Keyboard";
import { LayoutSelector } from "./components/LayoutSelector";
// import { NavBar } from "./components/NavBar";
import { TextBox } from "./components/TextBox";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <LayoutSelector />
      <TextBox />
      <Keyboard />
    </>
  );
}

export default App;
