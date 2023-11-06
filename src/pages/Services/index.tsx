import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { useSpring, animated } from 'react-spring';
import {
    Center,
    VStack,
    Box,
    Heading,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
    Link, // Import Link from Chakra UI
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import Layout from '../../components/Layout';

const Services: React.FC = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const fadeInUp = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
        to: { opacity: 1, transform: 'translate3d(0,0,0)' },
        delay: 200,
    });

    // Function to handle the navigation to the scheduling page
    const handleScheduleClick = () => {
        navigate('/agendamento'); // Use navigate function to go to the route
    };

    const listItemProps = {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
    };

    return (
        <Layout>
            <Center flexDir="column" p={8}>
                <animated.div style={fadeInUp}>
                    <VStack spacing={6} align="stretch">
                        <Box>
                            <Heading as="h1" size="xl" textAlign="center" mb={4}>
                                Nossos Serviços
                            </Heading>
                        </Box>

                        <Box bg={useColorModeValue('gray.100', 'gray.700')} p={5} borderRadius="md">
                            <Heading as="h2" size="lg" mb={4}>
                                Conserto de TVs
                            </Heading>
                            <List spacing={3}>
                                <ListItem {...listItemProps}>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                    Especialistas em todas as marcas
                                </ListItem>
                                <ListItem {...listItemProps}>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                    Atendimento em garantia para Philips e AOC
                                </ListItem>
                            </List>
                            <Link href="https://wa.me/551938753831" isExternal>
                                <Button colorScheme="green" mt={4}>
                                    Fale Conosco
                                </Button>
                            </Link>
                        </Box>
                        <Box>
                            <Heading as="h3" size="md" mb={4}>
                                Instalação e Configuração
                            </Heading>
                            <List spacing={3}>
                                <ListItem {...listItemProps}>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                    Instalação de TV e Soundbar
                                </ListItem>
                                <ListItem {...listItemProps}>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                    Fixação de TV em parede com suporte
                                </ListItem>
                                {/* ... outros serviços de instalação */}
                            </List>
                        </Box>

                        <Box>
                            <Heading as="h3" size="md" mb={4}>
                                Outros Reparos
                            </Heading>
                            <List spacing={3}>
                                <ListItem {...listItemProps}>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                    Conserto de Microondas
                                </ListItem>
                                {/* ... outros serviços de reparo */}
                            </List>
                        </Box>

                        <Box>
                            <Heading as="h3" size="md" mb={4}>
                                Serviço a Domicílio
                            </Heading>
                            <List spacing={3}>
                                <ListItem {...listItemProps}>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                    Entrega e retirada de equipamentos (com taxa)
                                </ListItem>
                                {/* ... outros serviços a domicílio */}
                            </List>
                        </Box>

                        <Button colorScheme="blue" onClick={handleScheduleClick}>
                            Agendar Serviço a Domicílio
                        </Button>
                    </VStack>
                </animated.div>
            </Center>
        </Layout>
    );
};

export default Services;
