import { FC } from 'react'

import { useHackerScramble } from 'src/hooks/stringHooks'

const Adminis: FC = () => {
  const word = useHackerScramble('λdminis')

  return <span>{word}</span>
}

export default Adminis
