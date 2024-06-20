import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Home } from './pages';
import { GlobalState } from './context/GlobalState';
import { ModalProvider } from './context/AppModal';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <MantineProvider>
      <GlobalState>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </ModalProvider>
      </GlobalState>
    </MantineProvider>
  )
}


export default App
