export const LevelSelector = () => {
  return (
    <div className="flex p-12 items-center justify-between w-[30vw] m-auto">
      <button className="border-red-600 border-2 rounded-full w-[6rem] h-[2.5rem]">
        Previous
      </button>
      <button className="border-orange-600 border-2 rounded-full w-[5rem] h-[2.5rem]">
        Retry
      </button>
      <button className="border-blue-600 border-2 rounded-full w-[5rem] h-[2.5rem]">
        Next
      </button>
    </div>
  );
};
