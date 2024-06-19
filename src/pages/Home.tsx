import { Container, Image } from "@mantine/core"

import banner from "./../assets/img/banner.jpg";

export const Home = () => {
    return <Container>
        <div>
            <Image src={banner} radius="md"/>
            
        </div>
    </Container>
}