import { Button, Center, Container, Flex, Group, NativeSelect, Text, TextInput, Title } from '@mantine/core';
import classes from './HeroSearch.module.css';
import { IconHistory } from '@tabler/icons-react';


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
            w={{ base: 200, md: 400, lg: 400 }}
            label="Seleccione el tipo de búsqueda" 
            data={['RUC', 'DNI', 'Carnet de Extranjería', 'Pasaporte', 'Ced. Diplomática de Identidad', 'Nombre/Razon Social']} 
            radius="xl"
            size="md"
        />
        <TextInput
            w={{ base: 200, md: 400, lg: 400 }}
            radius="xl"
            size="md"
            label="Ingrese el numero del documento seleccionado"
            placeholder="N° de documento"
        />
        </Flex>
        <Flex
            m={20}
            mih={50}
            gap="lg"
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
        >
          <Title order={3}>Historial</Title>
          <Button
            mih={50}
            component="a"
            size="sm"
            leftSection={<IconHistory style={{ width: '1rem', height: '1rem' }} color="#00ACEE" />}
            variant="default"
          >
            <Group gap="sm">
              <Title order={5}>Konecta</Title>
              <Text>RUC: 101010020</Text>
            </Group>
          </Button>
        </Flex>
    </Flex>
    </Container>

  );
}
