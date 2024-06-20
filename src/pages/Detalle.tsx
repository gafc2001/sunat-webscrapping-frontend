import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router"
import { RazonSocial, RazonSocialModel } from "../components/RazonSocial";
import { buscarDocumento, buscarRazonSocial } from "../services";
import { Container, Table, Title, Text, Flex, Group } from "@mantine/core";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import { ButtonDownload } from "../components/ButtonDownload";

export const Detalle = () => {


    return (
        <Flex
        m={50}
        p={55}
        mih={50}
        gap="sm"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
    >
        <Table>
        <Table.Thead>
            <Table.Tr>
            <Table.Th>
                <Container>
                <Text size="xl" fw={700}>Información General</Text>
                </Container>
            </Table.Th>
            <Table.Th></Table.Th>
            </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
        <Table.Tr key="{element.name}">
            <Table.Td>
                <Container>
                <Text size="xl">Razon Social</Text>
                <Text size="md">Texto</Text>
                </Container>
            </Table.Td>
            <Table.Td>
            <Container>
                <Text size="xl">Número de RUC</Text>
                <Text size="md">Texto</Text>
                </Container>
            </Table.Td> 
        </Table.Tr>
        <Table.Tr key="{element.name}">
            <Table.Td>
                <Container>
                <Text size="xl">Tipo Contribuyente</Text>
                <Text size="md">Texto</Text>
                </Container>
            </Table.Td>
            <Table.Td>
            <Container>
                <Text size="xl">Estado del contribuyente</Text>
                <Text size="md">Texto</Text>
                </Container>
            </Table.Td> 
        </Table.Tr>
        <Table.Tr key="{element.name}">
            <Table.Td>
                <Container>
                <Text size="xl">Condición del contribuyente</Text>
                <Text size="md">Texto</Text>
                </Container>
            </Table.Td>
            <Table.Td>
            <Container>
                <Text size="xl">Domicilio Fiscal</Text>
                <Text size="md">Texto</Text>
                </Container>
            </Table.Td> 
        </Table.Tr>
        <Table.Tr key="{element.name}">
            <Table.Td>
                <Container>
                <Text size="xl">Sistema de Emision Electrónica</Text>
                <Text size="md">Texto</Text>
                </Container>
            </Table.Td>
            <Table.Td>
            <Container>
                <Text size="xl">Emisión de Comprobante Electrónico</Text>
                <Text size="md">Texto</Text>
                </Container>
            </Table.Td> 
        </Table.Tr>
        <Table.Tr key="{element.name}">
            <Table.Td>
                <Container>
                <Text size="xl">Afiliado</Text>
                <Text size="md">Texto</Text>
                </Container>
            </Table.Td>
            <Table.Td>
            <Container>
                <Text size="xl">Padrones</Text>
                <Text size="md">Texto</Text>
                </Container>
            </Table.Td> 
        </Table.Tr>
        <Table.Tr key="{element.name}">
            <Table.Td>
                <Container>
                <Text size="xl">Fecha de Inscripción</Text>
                <Text size="md">Texto</Text>
                </Container>
            </Table.Td>
            <Table.Td>
            <Container>
                <Text size="xl">Actividades Económicas</Text>
                <Text size="md">Texto</Text>
                </Container>
            </Table.Td> 
        </Table.Tr>
        </Table.Tbody>
        </Table>  
        </Flex>
   
    )
}