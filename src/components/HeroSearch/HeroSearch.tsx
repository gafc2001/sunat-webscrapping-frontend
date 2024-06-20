import { Button, Center, Container, Flex, Group, NativeSelect, Text, TextInput, Title } from '@mantine/core';
import classes from './HeroSearch.module.css';
import { IconHistory } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { RucResult } from '../../models/RucResult';
import { useNavigate } from 'react-router';


interface FormType {
  tipoBusqueda : string,
  documento : string
}

export function HeroSearch() {

  const [historial,setHistorial] = useState<RucResult[]>([]);

  const [form,setForm] = useState<FormType>({
    tipoBusqueda : "ruc",
    documento : "",
  });

  const navigate = useNavigate();
  
  const handleChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name] : value,
    })
  }
  const handleBuscar = async () => {
    if(!form.tipoBusqueda || !form.documento){
      return alert("Ingrese los campos para la busqueda");
    }
    if(["dni","carnet-extranjeria","pasaporte","cedula"].includes(form.tipoBusqueda)){
      navigate(`/consulta/${form.tipoBusqueda}?val=${form.documento}`);
    }
    if(form.tipoBusqueda === "ruc"){
      navigate(`/detalle/${form.documento}`);
    }

  }
  const handleClickHistorial = (data : RucResult) => {
    const ruc = data.ruc.split("-")[0].trim();
    navigate(`/detalle/${ruc}`);
  }
  useEffect(() => {
    const h = localStorage.getItem("historial");
    if(!!h){
      setHistorial(JSON.parse(h));
    }
  },[])

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
            data={[
              {label : 'RUC', value : "ruc"},
              {label : 'DNI', value : "dni"},
              {label : 'Carnet de Extranjería', value : "carnet"},
              {label : 'Pasaporte', value : "pasaporte"},
              {label : 'Ced. Diplomática de Identidad', value : "cedula"}
            ]} 
            radius="xl"
            size="md"
            name="tipoBusqueda"
            onChange={handleChange}
        />
        <TextInput
            w={{ base: 200, md: 400, lg: 400 }}
            radius="xl"
            size="md"
            label="Ingrese el numero del documento seleccionado"
            placeholder="N° de documento"
            name="documento"
            onChange={handleChange}
        />
        <Button 
          fullWidth
          radius='xl'
          size='md'
          onClick={handleBuscar}
        >
          Buscar
        </Button>
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
          {historial.map( (el : RucResult,ind : number) => 
            <Button
              key={ind}
              mih={50}
              component="a"
              size="sm"
              onClick={() => handleClickHistorial(el)}
              leftSection={<IconHistory style={{ width: '1rem', height: '1rem' }} color="#00ACEE" />}
              variant="default"
            >
                <Group gap="sm">
                  <Title order={5}>{el.ruc}</Title>
                  {/* <Text>RUC: 101010020</Text> */}
                </Group>
            </Button>
            )}
        </Flex>
    </Flex>
    </Container>

  );
}
