import { ChangeEventHandler, FC, useState } from 'react'

import {
  FizzBuzzContainer,
  FizzBuzzDisplay,
  FizzBuzzHeader,
  FizzBuzzInput,
  FizzBuzzSubmit,
} from './styledComponents'

const FizzBuzz: FC = () => {
  const [input, setInput] = useState<string>('')
  const [fizzBuzzValue, setFizzBuzzValue] = useState<string>('')

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value)
  }

  const handleFizzBuzz = () => {
    const compare = parseInt(input)
    const array: Array<string | number> = []

    for (let i = 0; i <= compare; i++) {
      if (i === 0) {
        array.push(i)
        continue
      }
      if (i % 3 === 0) {
        array.push('Fizz')
        continue
      }
      if (i % 5 === 0) {
        array.push('Buzz')
        continue
      }
      if (i % 5 === 0 && i % 5 === 0) {
        array.push('FizzBuzz')
        continue
      }
      array.push(i)
    }

    setFizzBuzzValue(array.join(' '))
  }

  return (
    <FizzBuzzContainer>
      <FizzBuzzHeader>Enter a number to FizzBuzz here!</FizzBuzzHeader>
      <FizzBuzzInput onChange={handleChange} type='number' value={input} />
      <FizzBuzzSubmit onClick={handleFizzBuzz}>FizzBuzz</FizzBuzzSubmit>
      <FizzBuzzDisplay>
        The FizzBuzz from {input || 'input'}: {fizzBuzzValue}
      </FizzBuzzDisplay>
    </FizzBuzzContainer>
  )
}

export default FizzBuzz
