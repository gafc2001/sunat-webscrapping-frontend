import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router"
import { RazonSocial, RazonSocialModel } from "../components/RazonSocial";
import { buscarRazonSocial } from "../services";
import { Container } from "@mantine/core";

export const Consulta = ({tipoBusqueda,value} : any) => {

    const [resultados,setResultados] = useState<RazonSocialModel[]>([]);
    const location = useLocation();
    const navigate = useNavigate();

    const request = async () => {
        const {tipoBusqueda,value} = location.state;
        if(!tipoBusqueda) navigate("/");
        if(tipoBusqueda === "RAZON_SOCIAL"){
            const response = await buscarRazonSocial(value);
            setResultados(response);
        }
    }
    useEffect(() => {
        request();
    },[])
    return (
        <div>
            <Container>
                <div style={{margin : "2rem 0"}}>
                    <h2>Resultados (Coincidencias {resultados.length} )</h2>
                    <div>
                        {resultados.map( (el : RazonSocialModel,ind : number ) => {
                            return <RazonSocial key={ind} razonSocial={el}/>
                        })}
                    </div>
                </div>
            </Container>
        </div>
    )
}