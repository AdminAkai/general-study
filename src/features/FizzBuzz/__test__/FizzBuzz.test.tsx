import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import FizzBuzz from '../FizzBuzz.tsx'

describe('FizzBuzz tests', () => {
  it("Make sure FizzBuzz input FizzBuzz's", async () => {
    render(<FizzBuzz />)
    const input = screen.getByLabelText('FizzBuzz Input')
    await userEvent.type(input, '5')
    expect(input).toHaveValue(5)
    const displayText = screen.getByLabelText('FizzBuzz Display')
    const fizzBuzzButton = screen.getByRole('button', { name: 'FizzBuzz' })
    await userEvent.click(fizzBuzzButton)
    expect(displayText).toHaveTextContent(
      'The FizzBuzz from 5: 0 1 2 Fizz 4 Buzz'
    )
  })

  it('Navbar snapshot renders correctly', () => {
    const tree = renderer.create(<FizzBuzz />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
