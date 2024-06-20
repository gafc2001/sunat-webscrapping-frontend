import { RucResult } from "../models/RucResult";

export const buscarRazonSocial = async (razonSocial : string) => {
    const response = await fetch(import.meta.env.VITE_API_URL + `/razon_social/${razonSocial}`)
    .then(resp => resp.json());
    
    return response.data;
}
export const buscarDocumento = async(tipoDocumento : string, documento : string) => {
    const response = await fetch(import.meta.env.VITE_API_URL + `/documento/${tipoDocumento}/${documento}`)
    .then(resp => resp.json());
    return response.data;
}
export const buscarRut  = async (ruc : string) : Promise<RucResult> => {
    const response = await fetch(import.meta.env.VITE_API_URL + `/ruc/${ruc}`)
    .then(resp => resp.json());
    return response.data;
}

export const exportData = async (fileName : string,data : any[]) => {
    fetch(import.meta.env.VITE_API_URL + '/download',{
        method : "POST",
        body : JSON.stringify({
            fileName : fileName,
            data : data,
        }),
        headers : {
            "Content-Type" : "application/json",
        }
    })
    .then(resp => resp.status === 200 ? resp.blob() : Promise.reject('error'))
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    })
    .catch((err : any) => alert('error' + err.message));
}