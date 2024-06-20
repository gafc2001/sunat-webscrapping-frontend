import { Container } from "@mantine/core"

import { Busqueda } from "../components/Busqueda";
import { useGlobaState } from "../context/GlobalState";
import { RazonSocial, RazonSocialModel } from "../components/RazonSocial";

export const Home = () => {

    const {appData} = useGlobaState();

    return <Container>
        <div>
            <Busqueda/>
            {!!appData?.resultados_busqueda && 
            <div>
                <h2>Resultados (Coincidencias {appData.resultados_busqueda.length} )</h2>
                <div>
                    {appData?.resultados_busqueda.map( (el : RazonSocialModel,ind : number ) => {
                        return <RazonSocial key={ind} razonSocial={el}/>
                    })}
                </div>
            </div>
            }
        </div>
    </Container>
}