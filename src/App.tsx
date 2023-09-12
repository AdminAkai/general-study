import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { selectMode } from './redux/features/settingsSlice/selectors'
import { useAppSelector } from './redux/store'

import Landing from 'src/containers/Landing'

import Navbar from 'src/components/Navbar'

import theme from './theme'

import './assets/fonts/stylesheet.css'

import './App.css'

function App() {
  const mode = useAppSelector(selectMode)

  return (
    <ThemeProvider theme={theme[mode]}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
