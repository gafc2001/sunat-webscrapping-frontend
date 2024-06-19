import {createContext, useContext, useState } from "react";


interface GlobalType {
    appState : object,
    setAppData : (key : string, value : any) => void
}

const GlobalContext = createContext<GlobalType | null>(null);


export const GlobalState : React.FC<{children: React.ReactNode}> = ({children}) => {

    const [appState,setAppState] = useState({});

    const setAppData = (key : string ,value : any) => {
        setAppState({
            ...appState,
            [key] : value
        })
    }


    return <GlobalContext.Provider value={{appState,setAppData}}>
        {children}
    </GlobalContext.Provider>

}


export const useGlobaState = () => useContext(GlobalContext);