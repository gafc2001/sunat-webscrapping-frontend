import { faBuilding, faRotate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Badge, Button } from "@mantine/core"
import { buscarRut } from "../services"
import { useState } from "react"
import { RucResult } from "../models/RucResult"

export interface RazonSocialModel {
    estado : string,
    razonSocial : string,
    ruc : string,
    ubicacion : string,
}
interface RazonSocialProps {
    razonSocial : RazonSocialModel
}

export const RazonSocial = ({razonSocial} : RazonSocialProps) => {

    const [loading,setLoading] = useState<boolean>(false);

    const handleDetalle = async(ruc : string) => {
        setLoading(true);
        let historialData = localStorage.getItem("historial");
        if(historialData !== null){
            let historial : RucResult[] = JSON.parse(historialData);
            const result = historial.find( h => h.ruc.includes(ruc));
            if(result === undefined){
                const detalleRuc = await buscarRut(ruc);
                historial = [
                    ...historial,
                    detalleRuc
                ]
                localStorage.setItem("historial",JSON.stringify(historial));
            }
        }
        setLoading(false);
    }


    return <div className="result-item">
        <div className="icon">
            <FontAwesomeIcon icon={faBuilding}/>
        </div>
        <div className="info">
            <span>Empres {razonSocial.razonSocial}</span>
            <span>Estado <Badge color={razonSocial.estado === "ACTIVO"?"green":"red"}>{razonSocial.estado}</Badge></span>
        </div>
        <div className="button">
            <Button radius="lg" variant="filled" color="rgba(204, 204, 204, 1)" onClick={() => handleDetalle(razonSocial.ruc)} disabled={loading}>
                Ver detalle
                {loading && <FontAwesomeIcon style={{marginLeft : "5px"}} icon={faRotate} spin={true} />}
            </Button>
        </div>
    </div>
}