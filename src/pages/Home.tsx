import { Header } from "../components/Header/Header";
import { HeroBackground } from "../components/HeroBackground/HeroBackground";
import { HeroSearch } from "../components/HeroSearch/HeroSearch";
import { Footer } from "../components/Footer/Footer";

export const Home = () => {

    return <>
        <Header/>
        <HeroBackground/>
        <HeroSearch/>
        <Footer/>
    </>;
}