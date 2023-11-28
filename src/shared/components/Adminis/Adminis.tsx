import { FC } from 'react'

import { useHackerScramble } from 'src/shared/hooks/stringHooks'

const Adminis: FC = () => {
  const word: string = useHackerScramble('λdminis')

  return (
    <span style={{ userSelect: 'none' }} aria-label='Adminis Title'>
      {word}
    </span>
  )
}

export default Adminis
