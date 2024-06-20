import { RucResult } from "../models/RucResult"


interface RucDetalleProps {
    detalle : RucResult
}

export const RucDetalle = ({ detalle } : RucDetalleProps)=> {

    const dateToString = (date : Date | undefined) => {
        if(date === undefined) return "";
        const d = new Date(date);
        const day = d.getDay();
        const month = d.getMonth();
        const year = d.getFullYear();
        return `${day}/${month}/${year}"`;
    }

    return (
       <div>
            <div>
                {detalle.ruc}
            </div>
            <div>
                {detalle.tipo_contribuyente}
            </div>
            <div>
                {detalle.tipo_documento}
            </div>
            <div>
                {detalle.nombre_comercial}
            </div>
            <div>
                {dateToString(detalle.fecha_inscripcion)}
            </div>
            <div>
                {dateToString(detalle.fecha_inicio_actividades)}
            </div>
            <div>
                {detalle.estado_contribuyente}
            </div>
            <div>
                {detalle.condicion_contribuyente}
            </div>
            <div>
                {detalle.domicilio_fiscal}
            </div>
            <div>
                {detalle.sistema_emision_comprobante}
            </div>
            <div>
                {detalle.actividad_comercio_exterior}
            </div>
            <div>
                {detalle.sistema_contabilidad}
            </div>
            <div>
                {detalle.actividades_economicas}
            </div>
            <div>
                {detalle.comprobantes_pago}
            </div>
            <div>
                {detalle.sistema_emision_electronica}
            </div>
            <div>
                {dateToString(detalle.emisor_electronico_desde)}
            </div>
            <div>
                {detalle.comprobantes_electronicos}
            </div>
            <div>
                {dateToString(detalle.afiliado_ple_desde)}
            </div>
            <div>
                {detalle.padrones}
            </div>
       </div> 
    )
}