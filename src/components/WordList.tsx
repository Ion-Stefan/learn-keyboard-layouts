interface Props {
  words: string[];
}

export const WordList = ({ words }: Props) => {
  return (
    <>
      <p className="border-black p-2 border-2 w-1/3">{words.toString().replaceAll(',', ' ')}</p>
    </>
  )
}
