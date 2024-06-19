import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

import './App.css'
import { Home } from './pages';

function App() {
  return (
    <MantineProvider>
      <Home/>
    </MantineProvider>
  )
}

export default App
