import { Title, Text, Container, Overlay, Flex, TextInput, rem, ActionIcon } from '@mantine/core';
import classes from './HeroBackground.module.css';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export function HeroBackground() {

  const [val,setVal] = useState<string>("");

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setVal(value);
  }

  const navigate = useNavigate();
  const handleBuscar = async() => navigate("/consulta/razon-social?val="+val);
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Optimiza tus búsquedas con{' '}
          <Text component="span" inherit className={classes.highlight}>
          nuestra plataforma
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
          Encuentra información detallada de empresas y personas de manera rápida y eficiente. 
          Realiza búsquedas por RUC, documento o razón social con nuestra herramienta de scraping automatizada.
          </Text>
        </Container>

        <Flex
          mt={40}
          mih={50}
          gap="sm"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
        <TextInput
          w={{ base: 300, md: 600, lg: 700 }}
          radius="xl"
          size="md"
          placeholder="Ingresa el Nombre o Razon Social"
          rightSectionWidth={42}
          leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
          onChange={handleChange}
          rightSection={
            <ActionIcon size={32} radius="xl" variant="filled" onClick={handleBuscar}>
              <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          }
        />
        </Flex>
      </div>
    </div>
  );
}