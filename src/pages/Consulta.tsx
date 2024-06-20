import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { RazonSocial, RazonSocialModel } from "../components/RazonSocial";
import { buscarDocumento, buscarRazonSocial } from "../services";
import { Container } from "@mantine/core";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { ButtonDownload } from "../components/ButtonDownload";

export const Consulta = () => {

    const [resultados,setResultados] = useState<RazonSocialModel[]>([]);
    const [loading,setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const {tipoBusqueda }  = useParams();
    const [params] = useSearchParams();
    const request = async () => {
        setLoading(true);
        const value = params.get("val");
        console.log(value);
        if(!value || !tipoBusqueda) return navigate("/");

        if(tipoBusqueda === "razon-social"){
            const response = await buscarRazonSocial(value);
            setResultados(response);
        }
        if(["dni","carnet-extranjeria","pasaporte","cedula"].includes(tipoBusqueda)){
            const response = await buscarDocumento(tipoBusqueda,value);
            setResultados(response);
        }
        setLoading(false);
    }
    useEffect(() => {
        request();
    },[])
    return (
        <div style={{paddingTop : "4rem"}}>
            <Container>
                {loading
                ? <> <FontAwesomeIcon style={{marginLeft : "5px"}} icon={faRotate} spin={true} /> Cargando...</>
                :<div style={{margin : "2rem 0"}}>
                    <div>
                        <h2>Resultados (Coincidencias {resultados.length} )</h2>
                        <ButtonDownload text="Descargar Coincidencias" data={resultados}/>
                    </div>
                    <div>
                        {resultados.map( (el : RazonSocialModel,ind : number ) => {
                            return <RazonSocial key={ind} razonSocial={el}/>
                        })}
                    </div>
                </div>}
                
            </Container>
        </div>
    )
}