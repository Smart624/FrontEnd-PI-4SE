// src/pages/Home/index.tsx

import React from 'react';
import {useSpring, animated} from 'react-spring';
import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    SimpleGrid,
    Icon, Center
} from '@chakra-ui/react';
import {MdBuild, MdDeliveryDining, MdTv} from 'react-icons/md';
import {FaMicrophone, FaSoundcloud, FaTools} from 'react-icons/fa';
import Layout from '../../components/Layout';
import {useNavigate} from 'react-router-dom';
import CorporateClients from '../../components/CorporateClients';

const Home: React.FC = () => {
    const navigate = useNavigate();

    const fadeIn = useSpring({from: {opacity: 0}, opacity: 1, delay: 50});

    // Function to handle CTA button click
    const handleCTAClick = () => {
        navigate('/agendamento');
    };

    return (
        <Layout>
            <Flex direction="column" align="center" p={8}>
                <animated.div style={fadeIn}>
                    <Box textAlign="center" my={6}>
                        <Heading as="h1" size="xl" mb={2}>
                            Bem-vindo à Nishi Eletrônica
                        </Heading>
                        <Text fontSize="lg">
                            O melhor serviço de conserto e instalação para sua TV e Micro-ondas.
                        </Text>
                    </Box>
                </animated.div>


                <SimpleGrid columns={{base: 1, md: 2, lg: 4}} spacing={10}>
                    <ServiceBox
                        icon={MdTv}
                        title="Conserto de TVs"
                        description="Reparos em todas as marcas com especialidade em tecnologia moderna."
                    />
                    <ServiceBox
                        icon={FaMicrophone}
                        title="Soundbar/Home Theater"
                        description="Instalação e configuração para a melhor experiência de áudio em sua casa."
                    />
                    <ServiceBox
                        icon={FaTools}
                        title="Instalação de Suportes"
                        description="Instalação segura e precisa de suportes para TVs em paredes e outras superfícies."
                    />
                    <ServiceBox
                        icon={MdDeliveryDining}
                        title="Serviço de Entrega e Retirada"
                        description="Comodidade e rapidez para você"
                    />
                </SimpleGrid>



                <Box my={10}>
                    <Button colorScheme="blue" size="lg" onClick={handleCTAClick}>
                        Agende um Serviço
                    </Button>
                </Box>
            </Flex>

            <Box bg="gray.100" p={10}>
                <Center flexDir="column">
                    <Heading as="h3" size="md">Atendendo com excelência desde 2000.</Heading>
                    <Text mt={3}>Parceiros autorizados: Philips e AOC.</Text>
                    <Text mt={1}>Conserto de TVs e Micro-ondas de todas as marcas.</Text>
                    {/* Incluir logos de empresas atendidas */}
                </Center>
            </Box>

            <Center flexDir="column" p={8}>
                <CorporateClients />
            </Center>

        </Layout>
    );
};

const ServiceBox: React.FC<{ icon: any; title: string; description: string }> = ({
                                                                                     icon,
                                                                                     title,
                                                                                     description,
                                                                                 }) => (
    <Box textAlign="center">
        <Icon as={icon} w={10} h={10} mb={2}/>
        <Heading as="h3" size="md" mb={2}>{title}</Heading>
        <Text>{description}</Text>
    </Box>
);

export default Home;
