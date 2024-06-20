import { GlobalContext, GlobalType, useGlobaState } from "../context/GlobalState";
import { RazonSocial, RazonSocialModel } from "../components/RazonSocial";
import { Header } from "../components/Header/Header";
import { HeroBackground } from "../components/HeroBackground/HeroBackground";
import { HeroSearch } from "../components/HeroSearch/HeroSearch";
import { Footer } from "../components/Footer/Footer";

export const Home = () => {

    const {appData} = useGlobaState();

    //console.log(appData.resultados_busqueda.map)
    //console.log(!!appData.resultados_busqueda)

    return <>
        <Header/>
        <HeroBackground/>
        <HeroSearch/>
        {
        //{!!appData?.resultados_busqueda && 
        //<div>
        //    <h2>Resultados (Coincidencias {appData.resultados_busqueda.length} )</h2>
        //    <div>
        //        {appData?.resultados_busqueda.map( (el : RazonSocialModel,ind : number ) => {
        //            return <RazonSocial key={ind} razonSocial={el}/>
        //        })}
        //    </div>
        //</div>
        //}
        }
        <Footer/>
    </>;
}