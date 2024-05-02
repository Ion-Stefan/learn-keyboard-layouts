interface Props{
  nextWordList: () => void;
  prevWordList: () => void;
}

export const LevelSelector = ({nextWordList, prevWordList}:Props) => {

  return (
    <div className="flex px-12 items-center justify-between w-[30vw] m-auto">
      <button onClick={prevWordList} className="border-red-600 border-2 rounded-full w-[6rem] h-[2.5rem]">
        Previous
      </button>
      {/* <button className="border-orange-600 border-2 rounded-full w-[5rem] h-[2.5rem]"> */}
      {/*   Retry */}
      {/* </button> */}
      <button onClick={nextWordList} className="border-blue-600 border-2 rounded-full w-[5rem] h-[2.5rem]">
        Next
      </button>
    </div>
  );
};
