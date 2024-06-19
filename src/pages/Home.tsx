import { Button, Container, Image, Input} from "@mantine/core"

import banner from "./../assets/img/banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";

export const Home = () => {
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
        </div>
    </Container>
}