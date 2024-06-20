import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

import './App.css'
import { Home } from './pages';
import { GlobalState } from './context/GlobalState';
import { ModalProvider } from './context/AppModal';

function App() {
  return (
    <MantineProvider>
      <GlobalState>
        <ModalProvider>
          <Home/>
        </ModalProvider>
      </GlobalState>
    </MantineProvider>
  )
}

export default App
