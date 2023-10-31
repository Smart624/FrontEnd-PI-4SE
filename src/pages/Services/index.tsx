import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Box, Center, VStack, Text } from '@chakra-ui/react';

const Services: React.FC = () => (
    <Box>
        <Header />
        <Center flexDir="column" p={8}>
            <VStack spacing={4}>
                {/* Lista de serviços */}
                <Text>Instalação de TV</Text>
                <Text>Conserto de Soundbar</Text>
                {/* ... outros serviços */}
            </VStack>
        </Center>
        <Footer />
    </Box>
);

export default Services;
