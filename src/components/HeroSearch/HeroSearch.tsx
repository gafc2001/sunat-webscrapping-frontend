import { Center, Container, Flex, NativeSelect, Text, TextInput, Title } from '@mantine/core';
import classes from './HeroSearch.module.css';


export function HeroSearch() {

  return (
    <Container>
    <Center mt={50}>
      <Title order={1}>Consultas</Title>
    </Center>   
    <Center mt={50}>
      <Text size="lg" className={classes.description}>
        Realiza la consulta de manera específica seleccionando el tipo de búsqueda requerido
      </Text>
    </Center>    
    <Flex
        m={50}
        mih={50}
        gap="sm"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
    >
        <Flex
            m={50}
            mih={50}
            gap="lg"
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
        >
        <NativeSelect 
            w={{ base: 300, md: 600, lg: 700 }}
            label="Seleccione el tipo de búsqueda" 
            data={['RUC', 'DNI', 'Carnet de Extranjería', 'Pasaporte', 'Ced. Diplomática de Identidad', 'Nombre/Razon Social']} 
            radius="xl"
            size="md"
        />
        <TextInput
            w={{ base: 300, md: 600, lg: 700 }}
            radius="xl"
            size="md"
            label="Ingrese el numero del documento seleccionado"
            placeholder="N° de documento"
        />
        </Flex>
    </Flex>
    </Container>

  );
}
