import { useKeyboardStore } from "../store"

export const LayoutSelector = () => {

  const changeKeyboardLayout = useKeyboardStore((state) => state.changeLayout);

  return (
    <div>
      <select onChange={(e) => changeKeyboardLayout(String(e.target.value))}>
        <option value='qwerty'>QWERTY</option>
        <option value='dvorak'>DVORAK</option>
        {/* <option value='colemak'>COLEMAK</option> */}
      </select>
    </div>
  )
}
