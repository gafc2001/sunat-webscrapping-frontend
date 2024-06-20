import { Outlet } from "react-router"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"

export const Layout = () => {

    return (
        <>
            <Header/>
            <div style={{minHeight : "calc(100vh - 20rem)"}}>
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}