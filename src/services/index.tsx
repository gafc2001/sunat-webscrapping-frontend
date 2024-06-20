import { RucResult } from "../models/RucResult";

export const buscarRazonSocial = async (razonSocial : string) => {
    const response = await fetch(import.meta.env.VITE_API_URL + `/razon_social/${razonSocial}`);
    return response.json();
}
export const buscarDocumento = async(tipoDocumento : string, documento : string) => {
    const response = await fetch(import.meta.env.VITE_API_URL + `/documento/${tipoDocumento}/${documento}`);
    return response.json();
}
export const buscarRut  = async (ruc : string) : Promise<RucResult> => {
    const response = await fetch(import.meta.env.VITE_API_URL + `/ruc/${ruc}`);
    return response.json();
}