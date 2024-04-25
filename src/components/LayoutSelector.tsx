import { useKeyboardStore } from "../store";

export const LayoutSelector = () => {
  const changeKeyboardLayout = useKeyboardStore((state) => state.changeLayout);

  return (
    <div className="flex p-12 items-center justify-center m-auto w-[30vw]">
      <select onChange={(e) => changeKeyboardLayout(String(e.target.value))}>
        <option value="dvorak">DVORAK</option>
        <option value="dvorak" disabled>
          More options soon
        </option>
        {/* <option value='colemak'>COLEMAK</option> */}
      </select>
    </div>
  );
};
