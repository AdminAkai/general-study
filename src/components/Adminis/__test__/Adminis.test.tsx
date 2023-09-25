import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import Adminis from '../Adminis.tsx'

describe('Adminis tests', () => {
  jest.useFakeTimers()
  jest.spyOn(global, 'setInterval')

  it('Should scramble then render Adminis', async () => {
    render(<Adminis />)
    await jest.advanceTimersByTime(289.166666667)
    const title = screen.getByText('λdminis')
    expect(title).toBeInTheDocument()
  })

  it('Adminis renders correctly', () => {
    const tree = renderer.create(<Adminis />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
