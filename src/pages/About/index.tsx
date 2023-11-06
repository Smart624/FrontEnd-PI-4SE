import React from 'react';
import {
    Box,
    Center,
    VStack,
    Heading,
    Text,
    Divider
} from '@chakra-ui/react';
import Layout from '../../components/Layout';

const About: React.FC = () => {
    return (
        <Layout>
            <Center flexDir="column" p={8}>
                <VStack spacing={5}>
                    <Heading as="h1" size="xl">Sobre Nós</Heading>
                    <Box textAlign="center">
                        <Text fontSize="xl" fontWeight="semibold">
                            Pioneiros em Assistência Técnica em Indaiatuba desde 2000
                        </Text>
                        <Text my={3}>
                            Fundada em 10 de fevereiro de 2000, a nossa assistência técnica é especializada
                            no reparo e manutenção de televisores e microondas. Com mais de duas décadas de
                            experiência, nos consolidamos como a maior referência no setor em Indaiatuba.
                        </Text>
                        <Divider my={5} />
                        <Text fontSize="lg">
                            Nossa Missão: Prover soluções ágeis e eficazes para prolongar a vida útil dos
                            seus aparelhos, utilizando as técnicas mais avançadas e peças de alta qualidade.
                        </Text>
                        <Text my={3} fontSize="lg">
                            Nossa Visão: Ser reconhecidos como a melhor e mais confiável assistência técnica de
                            TVs e microondas, expandindo nossa expertise para novas regiões e tecnologias.
                        </Text>
                        <Text fontSize="lg">
                            Valorizamos parcerias duradouras e confiamos na qualidade do nosso trabalho,
                            por isso colaboramos com as principais marcas do mercado para garantir a
                            melhor assistência para nossos clientes.
                        </Text>
                    </Box>
                </VStack>
            </Center>
        </Layout>
    );
};

export default About;
