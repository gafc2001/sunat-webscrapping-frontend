import {createContext, useContext, useState } from "react";


export interface GlobalType {
    appData : any,
    setAppData : (key : string, value : any) => void
}

export const GlobalContext = createContext<GlobalType | null>(null);


export const GlobalState : React.FC<{children: React.ReactNode}> = ({children}) => {

    const [appData,setAppState] = useState<any | null>({});

    const setAppData = (key : string ,value : any) => {
        setAppState({
            ...appData,
            [key] : value
        })
    }


    return <GlobalContext.Provider value={{appData,setAppData}}>
        {children}
    </GlobalContext.Provider>

}


export const useGlobaState = () => useContext(GlobalContext) as GlobalType;