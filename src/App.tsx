import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Home } from './pages';
import { GlobalState } from './context/GlobalState';
import { ModalProvider } from './context/AppModal';
import { Route, Routes } from 'react-router';
import { Consulta } from './pages/Consulta';
import { Layout } from './Layout';

function App() {
  return (
    <MantineProvider>
      <GlobalState>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="/consulta" element={<Consulta/>}/>
            </Route>
          </Routes>
        </ModalProvider>
      </GlobalState>
    </MantineProvider>
  )
}


export default App
