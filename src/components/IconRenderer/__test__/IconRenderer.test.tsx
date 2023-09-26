import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom'

import store from 'src/redux/store.ts'

import IconRenderer from '../IconRenderer.tsx'

describe('Icon Renderer tests', () => {
  it('Make sure Icon Renderer renders a button with moon icon first', () => {
    render(
      <Provider store={store}>
        <IconRenderer />
      </Provider>
    )

    expect(screen.getByLabelText('Icon Button')).toBeVisible()
    expect(screen.getByLabelText('Moon Icon')).toBeVisible()
  })

  it('Icon Renderer snapshot renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <IconRenderer />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
