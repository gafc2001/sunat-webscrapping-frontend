export interface RucResult{
    ruc : string,
    tipo_contribuyente : string,
    tipo_documento : string,
    nombre_comercial : string,
    fecha_inscripcion : Date,
    fecha_inicio_actividades : Date,
    estado_contribuyente : string,
    condicion_contribuyente : string,
    domicilio_fiscal : string,
    sistema_emision_comprobante : string,
    actividad_comercio_exterior: string,
    sistema_contabilidad : any,
    actividades_economicas : string[],
    comprobantes_pago : string[],
    sistema_emision_electronica : string[],
    emisor_electronico_desde : Date,
    comprobantes_electronicos : string,
    afiliado_ple_desde : Date | undefined,
    padrones : string[],
}