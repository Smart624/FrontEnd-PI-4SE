import React from 'react';
import {Center, Text} from '@chakra-ui/react';
import Layout from "../../components/Layout";

const NotFound: React.FC = () => (
    <Layout>
        <Center flexDir="column" p={8}>
            <Text fontSize="xl">Página não encontrada</Text>
        </Center>
    </Layout>
);

export default NotFound;
