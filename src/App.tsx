import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Home } from './pages';
import { GlobalState } from './context/GlobalState';
import { ModalProvider } from './context/AppModal';
import { Route, Routes } from 'react-router';
import { Consulta } from './pages/Consulta';
import { Layout } from './Layout';
import './App.css'
import { useEffect } from 'react';
import { Detalle } from './pages/Detalle';

function App() {
  
  useEffect(() => {
    const historialData = localStorage.getItem("historial");
    if(historialData === undefined){
      console.log(historialData);
      localStorage.setItem("historial",JSON.stringify([]));
    }
  })

  return (
    <MantineProvider>
      <GlobalState>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="/consulta/:tipoBusqueda" element={<Consulta/>}/>              
              <Route path="/detalle/:ruc" element={<Detalle/>}/>
            </Route>
          </Routes>
        </ModalProvider>
      </GlobalState>
    </MantineProvider>
  )
}


export default App
