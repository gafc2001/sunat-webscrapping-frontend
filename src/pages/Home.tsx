import { Badge, Button, Container, Grid, Image, Input} from "@mantine/core"

import banner from "./../assets/img/banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faArrowRight, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { buscarRazonSocial } from "../services";

export const Home = () => {

    
    const handleBuscar = () => {
        buscarRazonSocial("Konecta");
    }

    return <Container>
        <div>
            <div className="banner-container">
                <Image src={banner} radius="md" className="banner-img"/>
                <div className="banner-content">
                    <h1>Buscar compañías en el Perú</h1>
                    <div className="input-search">
                        <Input variant="unstyled" placeholder="Ingrese " style={{flex : 1}} leftSection={<FontAwesomeIcon icon={faSearch} />}/>
                        <Button radius="md" variant="filled">Button</Button>
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
                                <Input radius="md" placeholder="Ingrese el RUC"/>
                            </div>
                            <div className="input-field">
                                <Input.Label style={{width: "100%",textAlign : "left"}}>Documento (DNI)</Input.Label>
                                <Input radius="md" placeholder="Ingrese el documento"/>
                            </div>
                            <div className="input-field">
                                <Input.Label style={{width: "100%",textAlign : "left"}}>Nombre de la Compañía</Input.Label>
                                <Input radius="md" placeholder="Ingrese el nombre de la compañía"/>
                            </div>
                            <div className="input-field">
                                <Button radius="md" fullWidth>Buscar</Button>
                            </div>
                        </div>
                    </div>
                </Grid.Col>
                <Grid.Col span={6}>
                    <h2>Ultimas búsqueda</h2>
                    <div>
                        <div className="history-item">
                            <div className="icon">
                                <FontAwesomeIcon icon={faSearch}/>
                            </div>
                            <div className="info">
                                <strong>Konecta</strong>
                                <span>Ruc: 1111111111</span>
                            </div>
                            <div className="button">
                                <FontAwesomeIcon icon={faArrowRight}/>
                            </div>
                        </div>
                    </div>
                </Grid.Col>
            </Grid>

            <div>
                <h2>Resultados (Coincidencias)</h2>
                <div>
                    <div className="result-item">
                        <div className="icon">
                            <FontAwesomeIcon icon={faBuilding}/>
                        </div>
                        <div className="info">
                            <span>Empresa Konecta</span>
                            <span>Estado <Badge color="green">Activa</Badge></span>
                        </div>
                        <div className="button">
                            <Button radius="lg" variant="filled" color="rgba(204, 204, 204, 1)">Ver detalle</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
}