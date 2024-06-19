import { faBuilding } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Badge, Button } from "@mantine/core"

interface RazonSocialModel {
    estado : string,
    razonSocial : string,
    ruc : string,
    ubicacion : string,
}
interface RazonSocialProps {
    razonSocial : RazonSocialModel
}

export const RazonSocial = ({razonSocial} : RazonSocialProps) => {

    const handleDetalle = async(ruc : string) => {
        
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
            <Button radius="lg" variant="filled" color="rgba(204, 204, 204, 1)" onClick={() => handleDetalle(razonSocial.ruc) }>Ver detalle</Button>
        </div>
    </div>
}