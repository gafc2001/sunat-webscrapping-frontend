import { Button, Grid, Image, Input } from "@mantine/core";
import banner from "./../assets/img/banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { BusquedasRecientes } from "./BusquedasRecientes";
import { useState } from "react";
import { buscarRazonSocial, buscarRut } from "../services";
import { useGlobaState } from "../context/GlobalState";


interface BusquedaType {
    ruc : string,
    razonSocial : string,
    documento : string
}

export const Busqueda = () => {

    const { setAppData } = useGlobaState();

    const [form,setForm] = useState<BusquedaType>({
        ruc : "",
        razonSocial : "",
        documento  : "",
    });

    const handelChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value);
        const { name, value } = e.target;
        setForm({
            ruc : "",
            razonSocial : "",
            documento  : "",
            [name] : value,
        })
    }

    const handleBuscar = async () => {
        let service = undefined;
        if(!!form.razonSocial){
            service = () => buscarRazonSocial(form.razonSocial);
        }else if(!!form.ruc){
            service = () => buscarRut(form.ruc);
        }else{
            return
        }
        
        const data = await service();
        setAppData("resultados_busqueda",data);
    }

    return (
        <>
            <div className="banner-container">
                <Image src={banner} radius="md" className="banner-img"/>
                <div className="banner-content">
                    <h1>Buscar compañías en el Perú</h1>
                    <div className="input-search">
                        <Input variant="unstyled" name="razonSocial" value={form.razonSocial} onChange={handelChange} placeholder="Ingrese " style={{flex : 1}} leftSection={<FontAwesomeIcon icon={faSearch} />}/>
                        <Button radius="md" variant="filled" onClick={handleBuscar}>Buscar</Button>
                    </div>
                </div>
            </div>

            <Grid gutter="xl" className="busqueda">
                <Grid.Col span={6}>
                    <div>
                        <h2>Buscar por:</h2>
                        <div className="search-fields">
                            <div className="input-field">
                                <Input.Label style={{width: "100%",textAlign : "left"}}>RUC</Input.Label>
                                <Input name="ruc" value={form.ruc} onChange={handelChange} radius="md" placeholder="Ingrese el RUC"/>
                            </div>
                            <div className="input-field">
                                <Input.Label style={{width: "100%",textAlign : "left"}}>Documento (DNI)</Input.Label>
                                <Input name="documento" value={form.documento} onChange={handelChange} radius="md" placeholder="Ingrese el documento"/>
                            </div>
                            <div className="input-field">
                                <Button radius="md" fullWidth onClick={handleBuscar}>Buscar</Button>
                            </div>
                        </div>
                    </div>
                </Grid.Col>
                <Grid.Col span={6}>
                    <BusquedasRecientes/>
                </Grid.Col>
            </Grid>
        </>
    )
}