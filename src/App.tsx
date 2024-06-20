import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Home } from './pages';
import { GlobalState } from './context/GlobalState';

function App() {
  return (
    <MantineProvider>
      <GlobalState>
        <Home/>
      </GlobalState>
    </MantineProvider>
  )
}

export default App
