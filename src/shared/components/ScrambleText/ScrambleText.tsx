import { FC } from 'react'
import { useHackerScramble } from 'src/shared/hooks/stringHooks'

interface IScrambleTextProps {
  text: string
}

const ScrambleText: FC<IScrambleTextProps> = ({ text }) => {
  const scrambledText = useHackerScramble(text)

  return <span>{scrambledText}</span>
}

export default ScrambleText
