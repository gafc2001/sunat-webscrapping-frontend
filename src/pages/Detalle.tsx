import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { buscarRut } from "../services";
import { Container, Table, Text, Flex } from "@mantine/core";
import { RucResult } from "../models/RucResult";

export const Detalle = () => {

    const { ruc } = useParams() || '';
    const [result,setResult] = useState<RucResult>();

    const request = async() => {
        if(!ruc){
            return;
        }
        const data = await buscarRut(ruc);
        console.log(data);
        setResult(data);
    }
    const dateToString = (date : Date | undefined) => {
        if(!date) return "-";
        const d = new Date(date);
        const day = d.getDay();
        const month = d.getMonth();
        const year = d.getFullYear();
        return `${day}/${month}/${year}"`;
    }
    useEffect(() => {
        request();
    },[]);


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
                <Table.Tr>
                    <Table.Td>
                        <Container>
                        <Text size="xl">Razon Social</Text>
                        <Text size="md">{result?.ruc.split("-")[0].trim()}</Text>
                        </Container>
                    </Table.Td>
                    <Table.Td>
                    <Container>
                        <Text size="xl">Número de RUC</Text>
                        <Text size="md">{result?.ruc.split("-")[1].trim()}</Text>
                        </Container>
                    </Table.Td> 
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>
                        <Container>
                        <Text size="xl">Tipo Contribuyente</Text>
                        <Text size="md">{result?.tipo_contribuyente}</Text>
                        </Container>
                    </Table.Td>
                    <Table.Td>
                    <Container>
                        <Text size="xl">Estado del contribuyente</Text>
                        <Text size="md">{result?.estado_contribuyente}</Text>
                        </Container>
                    </Table.Td> 
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>
                        <Container>
                        <Text size="xl">Condición del contribuyente</Text>
                        <Text size="md">{result?.condicion_contribuyente}</Text>
                        </Container>
                    </Table.Td>
                    <Table.Td>
                    <Container>
                        <Text size="xl">Domicilio Fiscal</Text>
                        <Text size="md">{result?.domicilio_fiscal}</Text>
                        </Container>
                    </Table.Td> 
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>
                        <Container>
                        <Text size="xl">Sistema de Emision Electrónica</Text>
                        <Text size="md">{result?.sistema_emision_electronica}</Text>
                        </Container>
                    </Table.Td>
                    <Table.Td>
                    <Container>
                        <Text size="xl">Emisión de Comprobante Electrónico</Text>
                        <Text size="md">{dateToString(result?.emisor_electronico_desde)}</Text>
                        </Container>
                    </Table.Td> 
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>
                        <Container>
                        <Text size="xl">Afiliado al PLE desde</Text>
                        <Text size="md">{dateToString(result?.afiliado_ple_desde)}</Text>
                        </Container>
                    </Table.Td>
                    <Table.Td>
                    <Container>
                        <Text size="xl">Padrones</Text>
                        <Text size="md">{result?.padrones}</Text>
                        </Container>
                    </Table.Td> 
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>
                        <Container>
                        <Text size="xl">Fecha de Inscripción</Text>
                        <Text size="md">{dateToString(result?.fecha_inscripcion)}</Text>
                        </Container>
                    </Table.Td>
                    <Table.Td>
                    <Container>
                        <Text size="xl">Actividades Económicas</Text>
                        <Text size="md">
                            {!!result?.actividades_economicas && 
                            <ul>
                                {result?.actividades_economicas
                                    .map( (item, ind) => <li key={ind}>{item}</li> )
                                }
                            </ul>
                            }
                        </Text>
                        </Container>
                    </Table.Td> 
                </Table.Tr>
            </Table.Tbody>
        </Table>  
        </Flex>
   
    )
}