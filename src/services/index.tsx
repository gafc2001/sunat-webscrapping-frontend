export const buscarRazonSocial = async (razonSocial : string) => {
    await fetch(import.meta.env.VITE_API_URL + `/razon_social/${razonSocial}`);
}