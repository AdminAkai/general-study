import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Landing from 'src/containers/Landing'

import Navbar from 'src/components/Navbar'

import theme from './theme'

import './assets/fonts/stylesheet.css'

import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme['lightTheme']}>
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
