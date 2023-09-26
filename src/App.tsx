import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { selectMode } from './redux/features/settingsSlice/selectors'
import { useAppSelector } from './redux/store'

import Main from 'src/containers/Main'
import Landing from 'src/containers/Landing'
import About from 'src/containers/About'

import theme from './theme'
import Changelog from './containers/Changelog/Changelog'

function App() {
  const mode = useAppSelector(selectMode)

  return (
    <ThemeProvider theme={theme[mode]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route index element={<Landing />} />
            <Route path='/about' element={<About />} />
            <Route path='/changelog' element={<Changelog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
