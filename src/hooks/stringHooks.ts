import { useState, useEffect } from 'react'

import { getRandomLetter } from 'src/utils/stringUtils'

export const useHackerScramble = (initialWord: string) => {
  const [word, setWord] = useState<string>('')
  const [start, setStart] = useState<boolean>(false)

  useEffect(() => {
    let interval: number | undefined = undefined
    if (start) {
      let count = 0
      let globalCount = 0
      let canChange = false
      interval = setInterval(() => {
        let newWord = ''
        for (let i = 0; i < initialWord.length; i++) {
          if (i <= count && canChange) {
            newWord += initialWord[i]
          } else {
            newWord += getRandomLetter()
          }
        }
        setWord(newWord)
        if (canChange) {
          count++
        }
        if (globalCount >= 20) {
          canChange = true
        }
        globalCount++
        if (count >= initialWord.length) {
          setStart(false)
          canChange = false
          count = 0
          globalCount = 0
        }
        console.log(count)
      }, 50)
    }
    if (word !== 'λdminis' && !start) {
      setStart(true)
    }
    return () => clearInterval(interval)
  }, [start])

  return word
}
