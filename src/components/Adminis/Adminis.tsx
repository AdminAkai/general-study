import { FC } from 'react'

import { useHackerScramble } from 'src/hooks/stringHooks'

const Adminis: FC = () => {
  const word: string = useHackerScramble('λdminis')

  return <span style={{ userSelect: 'none' }}>{word}</span>
}

export default Adminis
