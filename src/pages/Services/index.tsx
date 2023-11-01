import React from 'react';
import {Center, VStack, Text} from '@chakra-ui/react';
import Layout from "../../components/Layout";

const Services: React.FC = () => (
    <Layout>
        <Center flexDir="column" p={8}>
            <VStack spacing={4}>
                {/* Lista de serviços */}
                <Text>Instalação de TV</Text>
                <Text>Conserto de Soundbar</Text>
                {/* ... outros serviços */}
            </VStack>
        </Center>
    </Layout>
);

export default Services;
